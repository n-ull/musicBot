require('dotenv').config()
const web = require("./web")
const Discord = require('discord.js')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js')
const { Player } = require('discord-player')
const { EmbedBuilder } = require('@discordjs/builders')
const fs = require('fs')

const TOKEN = process.env.TOKEN
const APP_ID = process.env.APP_ID
const GUILD_ID = process.env.GUILD_ID
const LOAD_COMMANDS = process.argv[2] == 'load'

let commands = []

const client = new Discord.Client({
    intents: [
        'Guilds',
        'GuildVoiceStates'
    ]
})

client.scommands = new Discord.Collection()
client.player = new Player(client, {
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }
})

const slashCommands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of slashCommands) {
    const cmd = require(`./commands/${file}`)
    client.scommands.set(cmd.data.name, cmd)
    if (LOAD_COMMANDS) commands.push(cmd.data.toJSON())
}

if (LOAD_COMMANDS) {
    const rest = new REST({ version: "10" }).setToken(TOKEN)
    console.log('Installing commands in the guild')

    rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), { body: commands })
        .then(() => {
            console.log('Sucessfully')
            process.exit(0)
        })
        .catch((err) => {
            if (err) {
                console.log(err)
                process.exit(1)
            }
        })
}
else {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`)
        web.start_server(client)
    })

    client.on('interactionCreate', (interaction) => {
        async function commandHandler() {
            if (!interaction.isCommand) return

            const cmd = client.scommands.get(interaction.commandName)
            if (!cmd) interaction.reply('Invalid command')

            await interaction.deferReply()
            await cmd.run({ client, interaction })
        }

        commandHandler()
    })

    client.player.on('trackEnd', (queue, track) => {
        var channel = queue.messageChannel
        var msg = queue.guild.channels.cache.get(channel)
        var newSong = queue.tracks[0]

        if(!queue.tracks.length) {
            console.log(queue.metadata)
            msg.send({
                embeds: [new EmbedBuilder().setDescription('The queue finalized!')]
            })
            return
        }

        msg.send({
            embeds: [new EmbedBuilder().setDescription(`[${track.title}](${track.url}) ended.\n\n**Now playing:**\n[${newSong.title}](${newSong.url})`)
            .setFooter({text: `Duration: ${newSong.duration}`})
            .setThumbnail(newSong.thumbnail)]
        })
    })

    client.login(TOKEN)
}