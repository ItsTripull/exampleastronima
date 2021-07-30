module.exports.run = async (bot, message, args) => {
    return message.channel.send("Hello")
}

module.exports.config = {
    name: "hi",
    description: "says hello",
    usage: "|hi",
    accessableby: "Members",
    aliases: ['h']
}