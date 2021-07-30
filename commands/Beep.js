const botsettings = require(`../botsettings.json`);
const Discord = require('discord.js');
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {

    message.channel.send("Beep").then((sentMessage) => sentMessage.edit("Boop!"), 4000)

}
module.exports.config = {
    name: "Beep",
    description: "Answers your questions...",
    usage: `${botsettings.prefix}8ball [question]`,
    accessableby: "Members",
    aliases: ["magic8ball"]
}