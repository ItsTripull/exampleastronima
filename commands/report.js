const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

message.delete();

const User = message.mentions.users.first();

if (User == null) {
return message.channel.send(`You did not mention a user!`);
} else {

    let ReasonArray = message.content.split(" ");
    let ReasonArgs = ReasonArray.slice(2).join(' ');

if (!ReasonArgs) {
return message.channel.send(`You didn't provide a reason, ${message.author.username}!`);
}
const Avatar = User.displayAvatarURL();
const Channel =bot.channels.cache.get("729439912264335421");
if (!Channel)
  return message.channel.send(
    `There is no channel in this guild which is called \`reports\``
  );
const report = new Discord.MessageEmbed()
  .setTitle(`New report!`)
  .setDescription(
    `The user \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
  )
  .setColor(`RED`)
  .setThumbnail(Avatar)
  .addFields(
    { name: "Reported by", value: `${message.author.username}`, inline: true },
    { name: "Reported ID", value: `${User.id}`, inline: true },
    { name: "Reported Tag", value: `${User.tag}`, inline: true },
    { name: "Reason", value: `\`${ReasonArgs}\``, inline: true },
    {
      name: "Date (M/D/Y)",
      value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
      inline: true,
    }
  );
if (ReasonArgs) return Channel.send(report).then(message.reply("Your report was sent for mods to review...").then(msg => {
    msg.delete({timeout: 3000})
}))
}
}

module.exports.config = {
    name: "report",
    description: "Report someone for a good reason",
    usage: "|report [member] [reason]",
    accessableby: "Members",
    aliases: []
}