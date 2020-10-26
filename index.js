const Discord = require('discord.js');
const env = require('dotenv').config().parsed;

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
        default:
            console.log(message.content)
            break
    }
})

client.login(env.BOT_TOKEN)
