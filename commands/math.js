const math = require('mathjs');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    let argArray = message.content.split(" ");
    let mathArgs = argArray.slice(1).join(' ');

    if(!mathArgs) return message.channel.send('Please provide a question');

    let resp;

    try {
        resp = math.evaluate(mathArgs)
    } catch (e) {
        return message.channel.send('Please provide a **valid** question')
    }

    const embed = new Discord.MessageEmbed()
    .setColor(0x808080)
    .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${mathArgs}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);

}

module.exports.config = {
    name: "math",
    description: "Solve a simple math problem",
    usage: "|math [#+#]",
    accesableby: "Members",
    aliases: ["calculate"]
}