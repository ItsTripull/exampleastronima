const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

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

module.exports.config = {
    name: "testing",
    description: "testing command",
    usage: "|testing",
    accessableby: "Admin",
    aliases: []
}