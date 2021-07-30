module.exports.run = async (bot, message, args) => {
            
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');

    await message.delete()

    let argumentArray = message.content.split(" ");
    let argumentArgs = argumentArray.slice(1);
    let argumentSlice = argumentArgs.join(' ');

    if (!argumentSlice) return message.reply('You haven\'t given an amount of messages which should be deleted!');
    if (isNaN(argumentSlice)) return message.reply('The amount parameter isn`t a number!');

    if (argumentSlice > 100) return message.reply('You can`t delete more than 100 messages at once!');
    if (argumentSlice < 1) return message.reply('You have to delete at least 1 message!');

    await message.channel.messages.fetch({ limit: argumentSlice }).then(messages => {
        message.channel.bulkDelete(messages
    )})
    message.channel.send(`Succesfully deleted ${argumentSlice} messages!`);
}
module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "|clear",
    accessableby: "admins",
    aliases: ['c', 'purge']
}