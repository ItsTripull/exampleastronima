const botsettings = require(`../botsettings.json`);
const Discord = require('discord.js');
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {

    const answers = [
        'Maybe.',
        'Certainly not.',
        'I hope so.',
        'Not in your wildest dreams.',
        'There is a good chance.',
        'Quite likely.',
        'I think so.',
        'I hope not.',
        'I hope so.',
        'Never!',
        'Fuhgeddaboudit.',
        'Ahaha! Really?!?',
        'Pfft.',
        'Sorry, bucko.',
        'Hell, yes.',
        'Hell to the no.',
        'The future is bleak.',
        'The future is uncertain.',
        'I would rather not say.',
        'Who cares?',
        'Possibly.',
        'Never, ever, ever.',
        'There is a small chance.',
        'Yes!'
    ];

    const question = message.content.split(' ').splice(1).join(' ')
 
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      const response = answers[Math.floor(Math.random() * answers.length)];
      const Embed = new Discord.MessageEmbed()
        .setTitle(`8Ball!`)
        .setThumbnail('https://i.imgur.com/9qu5pt6.png?1')
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  };

  module.exports.config = {
    name: "8ball",
    description: "Answers your questions...",
    usage: `${botsettings.prefix}8ball [question]`,
    accessableby: "Members",
    aliases: ["magic8ball"]
}