const level = require('discord-xp')
const levels = require('discord-xp')
const Discord = require('discord.js')
levels.setURL("mongodb+srv://TripleTrap:qwe123azx@1@cluster0.8hq8j.mongodb.net/Data")

module.exports.run = async(bot, message, args) => {

    let inputArray = message.content.split(" ");
    let inputArgs = inputArray.slice(1);

    if (!message.guild) return;
    if (message.author.bot) return;
    const randomXp = Math.floor(Math.random() * 9) + 1;
    const hasLeveledUp = await level.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await levels.fetch(message.author.id, message.guild.id);
        message.channel.send(` You leveled up to ${user.level}! Keep it up!`)
    }
    if (inputArgs[0] === "rank") {
        const user = await levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`You are currently level ***${user.level}***!`)
    }
    if (inputArgs[0] === "leaderboard" || inputArgs[0] === "lb") {
        const rawLeaderBoard = await levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderBoard.length < 1) return reply("nobody is on the leaderboard yet!");

        const leaderboard = levels.computeLeaderboard(bot, rawLeaderBoard);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`${lb.join("\n\n")}`)
    }
}

module.exports.config = {
    name: "leveling",
    description: "access to the bots leveling system!",
    usage: "|leveling",
    accessableby: "members",
    aliases: []
}