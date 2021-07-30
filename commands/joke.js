const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {

message.delete()

got('https://www.reddit.com/r/jokes/random/.json').then(response => {
    let content = JSON.parse(response.body);
    var title = content[0].data.children[0].data.title;
    var joke = content[0].data.children[0].data.selftext;

    const Joker = new Discord.MessageEmbed()
        .setTitle('**' + title + '**')
        .setColor(`RANDOM`)
        .setThumbnail('https://i.imgur.com/VkRM56v.png')
        .setDescription(joke)

    message.channel.send(Joker)
    });
}

module.exports.config = {
    name: "joke",
    description: "Tells you a joke",
    usage: "|joke",
    accessableby: "Members",
    aliases: []
}