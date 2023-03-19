const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ben')
        .setDescription('Gets a random response from Ben.')
        .addStringOption(option => option.setName('question').setDescription('The question to ask Ben.').setRequired(true)),
    async execute(interaction, client) {
        let q = interaction.options.getString('question');
        let response = [
            'yes',
            'no',
            'Ho ho ho',
            'Eurfhg',
        ];
        let rndresponse = response[Math.floor(Math.random() * response.length)];
        await interaction.deferReply();
        await interaction.editReply({ content:`**Question**: ${q}\n**Ben**: ${rndresponse}`, ephemeral: true});
    }

}