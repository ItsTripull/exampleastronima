const Discord = require('discord.js');
const botsettings = require(`../botsettings.json`);

module.exports.run = async (bot, message, args) => {

message.delete()

if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        message.reply("You don't have permision to use this command");
    else {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'PepePewPew');

message.delete();

let channel = message.mentions.channels.first();

if (channel == null) {
return message.channel.send(`You did not mention a channel!`);
} else {

    let AnnounceArray = message.content.split(" ");
    let AnnounceArgs = AnnounceArray.slice(2).join(' ');

if (!AnnounceArgs) {
return message.channel.send(`You didn't provide me with something to announce, ${message.author.username}!`);
}

const report = new Discord.MessageEmbed()
  .setTitle(`✨Announcement!✨`)
  .setDescription(AnnounceArgs)
  .setColor(`RANDOM`)
  .setFooter(`Announcement by: ${message.author.username}`)
if (AnnounceArgs) return channel.send(report).then(message.reply("Your announcement was sent!").then(msg => {
    msg.delete({timeout: 3000})
}))
}
}
}

module.exports.config = {
    name: "announcement",
    description: "Send and announcement to a channel",
    usage: `${botsettings.prefix}announcement`,
    accessableby: "Admins",
    aliases: ["announce"]
}
