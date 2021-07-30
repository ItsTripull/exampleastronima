const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let scheduleArray = message.content.split(" ");
    let scheduleArgs = scheduleArray.slice(1).join(' ');

    message.delete()
    const tioEmbed = new Discord.MessageEmbed()
        .setColor('#0124FF')
        .setTitle('Right now, sadly, UncleYerba will not be streaming... Hope you guys understand... (use "|schedule tia" to see Tia\'s schedule!)')
        .setAuthor('✨|Uncle\'s Schedule|✨')
if (scheduleArgs[0] === 'uncle') {
    return message.channel.send(tioEmbed)
}
    const messageEmbed = new Discord.MessageEmbed()
    .setColor('#45D9CC')
    .setTitle('Here is the schedule for TiaYerba\'s stream!')
    .setDescription('The schedule for TiaYerba\'s stream is...')
    .addFields(
        { name: '|Friday|', value: 'Starting at 9pm central!'},
    )
    .setAuthor('✨|Tia\'s Schedule|✨')
     message.channel.send(messageEmbed);
    }

    module.exports.config = {
        name: "schedule",
        description: "Twitch channel shedules",
        usage: "|schedule",
        accessableby: "Members",
        aliases: []
    }