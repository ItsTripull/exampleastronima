const botsettings = require(`../botsettings.json`);

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("No reason for you to execute this command...")
        .then(msg => {
            msg.delete({timeout: 2000})
        })

    else {

      if (!message.guild) return;

      let ReasonArray = message.content.split(" ");
      let ReasonArgs = ReasonArray.slice(2).join(' ');
      const user = message.mentions.users.first();
  
      if (user) {
        
        const member = message.guild.member(user);
      
        if (member) {
      
          member
            .ban({
              reason: `${ReasonArgs}`,
            })
            .then(() => {
              
              message.reply(`Successfully banned ${user.tag} from the house!`);
            })
            .catch(err => {
              
              message.reply('I was unable to ban the said member');
              
              console.error(err);
            });
        } else {
      
          message.reply("That user isn't in the House!");
        }
      } else {
      
        message.reply("You didn't mention a user to ban!");
      }
    }
  };
  

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: `${botsettings.prefix}ban`,
    accessableby: "Admins",
    aliases: []
}