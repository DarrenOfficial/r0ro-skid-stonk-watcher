const Discord = require('discord.js');
const botconfig = require('./../botconfig.json');
module.exports.run = async (client, bot, message, args) => {   
    if (args[0]){
        let command= args[0]
        if (client.commands.has(command)){
            commandn = client.commands.get(command);
            message.author.lastMessage.delete()
            var SHembed = new Discord.RichEmbed()
            .setColor(0x04B404)
            .setAuthor(`Stock Market Bot ${client.user.username}`, client.user.avatarURL)
            .setTimestamp()
            .setDescription(`Made by DarrenOfficial#3451 for r0ro Stonks market`)
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setTimestamp()
            message.channel.send(SHembed)
        }
    }

    if (!args[0]){
        message.delete();
       
            const embed = new Discord.RichEmbed();
            embed.setAuthor(`Stock Market Guild Command`, client.user.avatarURL);
            embed.setColor(0xdf4b11);
            embed.setFooter(`command runned by: ${message.author.username}`,message.author.avatarURL);
            embed.setTimestamp()
            embed.setThumbnail('https://assets.cynathans.com/darren.png')
            embed.addField("Currently theres no command for this bot.")
           message.channel.send(embed)
    }
}
module.exports.config = {
    name: "help",
    aliases: ["help"],
    noaliases: "helps",
    description: "shows help command. ",
    usage: "help [CMD]",
    berechtigung: "",
}

