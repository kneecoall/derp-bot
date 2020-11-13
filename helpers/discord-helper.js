const Discord = require('discord.js')

module.exports = {
  sendEmbed: function (message) {
    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#344a21')
      .setTitle('duck')
      .setURL('https://github.com/kneecoall')
      .setAuthor('duck', 'https://i.imgur.com/iRjvEAE.jpeg', 'https://github.com/kneecoall')
      .setDescription('fat duck')
      .setThumbnail('https://i.imgur.com/iRjvEAE.jpeg')
      .addFields(
        { name: 'duck', value: 'duck' },
        { name: 'duck', value: 'duck', inline: true },
        { name: 'duck', value: 'duck', inline: true }
      )
      .setImage('https://i.imgur.com/iRjvEAE.jpeg')
      .setTimestamp()
      .setFooter('duck', 'https://i.imgur.com/iRjvEAE.jpeg')

    message.reply(exampleEmbed)
  }
}
