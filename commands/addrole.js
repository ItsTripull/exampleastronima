const botsettings = require(`../botsettings.json`);
module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        message.reply("You don't have permision to use this command");
    else {

        let epicRole = message.guild.roles.cache.get('ROLE_ID_HERE');
        const member = message.mentions.members.first();

        member.roles.add(epicRole);
        message.channel.send('Role Added').catch(err => {
        
    
        
            message.reply('I don\'t have the powers of god to add that role to you. Its dangerous...');
            
            console.error(err);
          });
    }
}

module.exports.config = {
    name: "addrole",
    description: "Give someone a role",
    usage: `${botsettings.prefix}addrole`,
    accessableby: "Admins",
    aliases: []
}