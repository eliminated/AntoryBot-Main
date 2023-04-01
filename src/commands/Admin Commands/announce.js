const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('announce')
    .setDescription('Announce something inside parameters')
    .addStringOption(option => option.setName('message').setDescription('Provide the messages that you want to send').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction, client) {
		const message = interaction.options.getString('message');

		const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setTitle('Announcement')
			.setDescription(message);

		await channel.send({ embeds: [embed] });
  }
}