module.exports = {
    name: 'listener',
    async execute(interaction, client) {
      // Define the bad words that you want to detect
      const badWords = ['fuck', 'shit', 'bitch', 'nigga', 'ass', 'asshole', 'b1tch'];
  
      // Check if the message contains any bad words
      const messageContent = interaction.content.toLowerCase();
      const containsBadWord = badWords.some(word => messageContent.includes(word));
  
      // If the message contains a bad word, warn the user and delete the message
      if (containsBadWord) {
        // Get the user who sent the message
        const user = interaction.user;
  
        // Send a warning message to the user
        await user.send(`Please do not use bad words in this server.`);
  
        // Delete the message
        await interaction.delete();
      }
    }
  }
  