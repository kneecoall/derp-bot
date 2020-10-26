const Discord = require('discord.js');
const env = require('dotenv').config().parsed;

// Helpers
const discordHelper = require('./helpers/discord-helper.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot is ready!')
})

client.on('message', (message) => {
    // Bot doesn't own messages
    if (message.author.bot) return;

    switch (message.content) {
        // Command: !ping
        case '!ping':
            message.reply('Pong!')
            break
        case '!weeb':
            message.reply('Elian is a weeb')
            break
        case '!duck':
            discordHelper.sendEmbed(message)
            break;
        default:
            console.log(message.content)
            break
    }
})

client.login(env.BOT_TOKEN)
