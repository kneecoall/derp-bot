const env = require('dotenv').config().parsed;
const Discord = require('discord.js');
const client = new Discord.Client();
const discordHelper = require('./helpers/discord-helper.js');

client.on('ready', console.log('bot is ready!'));

client.on('message', (message) => {
    if (message.author.bot) return;

    switch (message.content) {
        case '!ping':
            message.reply('Pong!');
            break
        case '!weeb':
            message.reply('Elian is a weeb');
            break
        case '!duck':
            discordHelper.sendEmbed(message);
            break;
        default:
            console.log(message.content); // gg breaking Discord ToS 10/10
            break;
    }
});

client.login(env.BOT_TOKEN);
