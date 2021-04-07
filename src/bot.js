const Discord = require('discord.js');
const client = new Discord.Client();
const logger = require("discordjs-logger");
logger.all(client);

client.on('ready', () => {
  console.log(`hello world`);
});

client.on("message", function (message) {
    console.log(`${message} , ${user} , ${guildid}`);
});


client.login('ODI5MzM4MDI2NjE3NjAyMDc4.YG2rOQ.m6829LiQetIFjAey9Pb8dYlKf7M');
