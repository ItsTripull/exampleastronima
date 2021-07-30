const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

message.delete();

const suicideHotline = new Discord.MessageEmbed()
  .setTitle(`Suidide Prevention Hotline`)
  .setDescription(
    `Help is available!\nThe National Suicide Prevention Hotline can help you during your troubling times! `
  )
  .setColor(`PINK`)
  .addFields(
      { name: "Suicide Hotline", value: "1-800-273-8255", inline: true},
      { name:"You aren't alone", value: "You aren't alone! Seek help and chat with one of the many counselors by dialing ***1-800-273-8255***", inline: true}
  )
  message.channel.send(suicideHotline)
}

module.exports.config = {
    name: "lifeline",
    description: "display the suicide hotline number for someone in need to call",
    usage: "|lifeline",
    accessableby: "Members",
    aliases: ["hotline"]
}