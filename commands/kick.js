module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.");
    else {

        if (!message.guild) return;

    
    let ReasonArray = message.content.split(" ");
    let ReasonArgs = ReasonArray.slice(2).join(' ');
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);

      if (member) {
        
    
        member
          .kick(`${ReasonArgs}`)
          .then(() => {
            
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
        
    
        
            message.reply('I was unable to kick the member');
            
            console.error(err);
          });
      } else {
        
        message.reply("That user isn't in this guild!");
      }
    
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
};

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "|kick",
    accessableby: "Admins",
    aliases: []
}