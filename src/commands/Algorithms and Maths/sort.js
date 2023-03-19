const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sort')
        .setDescription('Sorts an array.')
        .addStringOption(option => option.setName('list').setDescription('The array to sort (comma-separated).').setRequired(true)),
    async execute(interaction, client) {
        const list = interaction.options.getString('list');
        const listArray = list.split(',').map(str => parseInt(str.trim())); // Split by commas, trim and parse each element
        const sortedArray = listArray.sort((a, b) => a - b); // Sort the array
        const sortedString = sortedArray.join(', '); // Join the sorted array back into a string
        await interaction.reply({ content: `Sorted: ${sortedString}`, ephemeral: true });
    }
}
