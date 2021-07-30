const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

message.delete()

const messageEmbed = new Discord.MessageEmbed()
 .setColor('#5FFF19')
 .setTitle('UncleYerba\'s house Invite link')
 .setDescription('Please use this this invite link to share the servers to others...')
 .addFields(
     { name: 'https://discord.gg/6Tdxrfx', value: 'Copy and share this link with others to invite them to the server!!'}
 )
 .setAuthor('✨Invite Link✨')
    
    message.channel.send({embed: messageEmbed}).then(embedMessage => {
        embedMessage.react("💎");
    });
}

module.exports.config = {
    name: "invite-link",
    description: "Send the server invite link",
    usage: "|invite-link",
    accessableby: "Members",
    aliases: ["invlink"]
}