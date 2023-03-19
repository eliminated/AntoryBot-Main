const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Displays information about the server.'),
  async execute(interaction) {
    const guild = interaction.guild;
    
    // Get the number of members in the server
    const memberCount = guild.memberCount;
    
    // Get the server owner
    const owner = await guild.fetchOwner();

    // Get the number of roles in the server
    const roleCount = guild.roles.cache.size;

    // Get the server's creation date
    const creationDate = guild.createdAt.toLocaleDateString();

    // Create an embed message with the server information
    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL())
      .addFields(
        { name: 'Owner', value: `${owner.user.tag}`, inline: true},
        { name: 'Members', value: `${memberCount}`, inline: true},
        { name: 'Roles', value: `${roleCount}`, inline: true},
        { name: 'Created at', value: `${creationDate}`, inline: true},
      )
    //   .addField('Owner', owner.user.tag)
    //   .addField('Members', memberCount)
    //   .addField('Roles', roleCount)
    //   .addField('Created At', creationDate);

    // Send the embed message to the channel where the slash command was used
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
