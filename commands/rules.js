const Discord = require('discord.js');
const botsettings = require(`../botsettings.json`);

module.exports.run = async (bot, message, args) => {

message.delete()

if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        message.reply("You don't have permision to use this command");
    else {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'sparkles');

const messageEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Abide by the following:')
.setDescription("**1.** It’s one thing to mess around with each other, but no bullying/hate.\n\n**2.** No ridiculous spamming.\n\n**3.** No pressuring people to do things they don’t wanna do.\n\n**4.** Dont post any sexual content. this includes gifs, clips, videos, and images.\n\n**5.** Respect everyone! We are all friends in this community!")
.setThumbnail('https://i.imgur.com/WErp8GG.png?1')
.setAuthor(`🌟Rules🌟`)
.setFooter("Brought to you by Tia! :3")

message.channel.send({embed: messageEmbed}).then(embedMessage => {
    embedMessage.react(emoji);
});
}
}
module.exports.config = {
    name: "rules",
    description: "The rules of this server.",
    usage: `${botsettings.prefix}rules`,
    accessableby: "Admins",
    aliases: ["Rules"]
}