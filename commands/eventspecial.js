const Discord = require('discord.js');
const botsettings = require(`../botsettings.json`);

module.exports.run = async (bot, message, args) => {

    message.delete()

    const event = new Discord.MessageEmbed()
    .setTitle("✨Pokemon Event!✨")
    .setDescription("Viewers that are watching the stream when the event is live will have a chance to win some cash by correctly guessing how many eggs it takes for Tanuki to hatch a shiny pokemon!")
    .addFields(
        { name: "How it will work:", value: "On stream when Tanuki is hatching eggs, viewers have the chance to try and guess the amount of eggs that it will take to go through in order to get a shiny Pokemon.\nIf a viewer can guess the amount of eggs that tanuki has to go through to get a shiny you'll win $20. However if your guess ends up being +10/-10 of the actual number and is the closest out of all participants, you will win $10.", inline: true},
        { name: "How to count as a participant:", value: "You must be on the https://www.twitch.tv/TanukiAlan stream to be entered, you can even lurk if you want but you must be present!", inline: true},
        { name: "Rule:", value: "Viewers must guess __**20**__ apart from another Viewer's guess. If a Viewer guesses something close to another viewer's guess, the attempt won't be counted.\n__An Example:__ \n**Viewer 1:** \"110\" \n**Viewer 2:** \"111\" <---- (viewer 2's guess won't be counted in this situation)\n\n__**Abuse of this system will result in the Viewer not being able to participate for some time**__"}
    )
    .setThumbnail("https://i.imgur.com/RVvz2S9.png")
    .setFooter("Hope to see ya'll there and have a good day :D")
    .setColor("BLUE")

    message.channel.send(event).then(message.channel.send("http://discord.gg/mjtqAgD https://www.twitch.tv/TanukiAlan"))
}

module.exports.config = {
    name: "event",
    description: "Get a list of cmds or cmd help",
    usage: "$help",
    accessableby: "Members",
    aliases: []
}