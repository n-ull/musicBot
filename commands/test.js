const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test the damn bot'),
    run: async ({ client, interaction }) => {
        console.log(client.player.queues.has(interaction.guild.id))    
     }
}