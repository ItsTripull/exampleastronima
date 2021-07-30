const Discord = require('discord.js');
const botsettings = require(`./botsettings.json`);
const mongoose = require('mongoose');

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://TripleTrap:qwe123azx@1@cluster0.8hq8j.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

bot.on("guildMemberAdd", member => {
    const welcomeEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle("**New Friend**")
        .setDescription(`💫Hello there ***"${member.user.username}"***, Welcome to TiaWRLD!💫`)
        .addFields(
            { name: "Total Celestial Crew count:", value: `***${member.guild.memberCount}***`})
        .setFooter('Hope you enjoy your stay!')
        .setTimestamp();
    const welcomeChannel = bot.channels.cache.get("822295425460600842")
    welcomeChannel.send (welcomeEmbed)
})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(botsettings.token);