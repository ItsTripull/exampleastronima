module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('ROLE_ID_HERE');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removerole",
    description: "Remove a role from someone",
    usage: "|removerole",
    accessableby: "Admins",
    aliases: []
}