const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder } = require('discord.js')
const { QueryType } = require('discord-player')

let queue = null

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song')

        .addSubcommand((subcommand) =>
            subcommand.setName('song')
                .setDescription("Add a song by its name")
                .addStringOption((option) => option.setName('name').setDescription("The name of the song").setRequired(true)))

        .addSubcommand((subcommand) =>
            subcommand.setName('url')
                .setDescription('Add a song with an URL.')
                .addStringOption((option) => option.setName('url').setDescription("The song's URL.").setRequired(true)))

        .addSubcommand((subcommand) =>
            subcommand.setName('playlist')
                .setDescription("Add a URL playlist")
                .addStringOption((option) => option.setName('url').setDescription("The url of the playlist").setRequired(true))),

    run: async ({ client, interaction }) => {
        if (!interaction.member.voice.channel) {
            return interaction.editReply('You need to be in a Voice Channel to use this command.')
        }

        if (client.player.queues.has(interaction.guild.id)) {
            console.log('Existe la queue')
            queue = client.player.getQueue(interaction.guild.id)
        } else {
            console.log('No existe la queue')
            queue = await client.player.createQueue(interaction.guild)
        }

        if (!queue.conection) await queue.connect(interaction.member.voice.channel)

        let embed = new EmbedBuilder()
        let command = interaction.options._subcommand
        if (command === "url") {
            const url = interaction.option.getString("url")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO
            })
            if (result.tracks.length === 0) return interaction.editReply("Sorry, no results were found.")

            const song = result.tracks[0]
            await queue.addTrack(song)

            embed
                .setDescription(`**[${song.title}](${song.url})** has been added to Queue`)
                .setThumbnail(song.setThumbnail)
                .setFooter({ text: `Duration: ${song.duration}` })
        }
        if (command === "playlist") {
            const url = interaction.options.getString('url')
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_PLAYLIST
            })
            if (result.tracks.length === 0) {
                return interaction.editReply("There's no results")
            }

            const playlist = result.playlist
            await queue.addTrack(result.tracks)
            embed
                .setDescription(`**${result.tracks.length} [${playlist.title}](${playlist.url})** have been added to the queue.`)
                .setThumbnail(song.thumbnail)
        }
        if (command === "song") {
            const name = interaction.options.getString('name')
            const result = await client.player.search(name, {
                requestedBy: interaction.user,
                searchEngine: QueryType.AUTO
            })

            if (result.tracks.length === 0) {
                return interaction.editReply("There's no results")
            }

            const song = result.tracks[0]
            await queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** has been added to Queue`)
                .setThumbnail(song.setThumbnail)
                .setFooter({ text: `Duration: ${song.duration}` })
        }
        if(!queue.playing) {
            queue.play(undefined, {immediate: false})
        } 
        await interaction.editReply({
            embeds: [embed]
        })
    },


}