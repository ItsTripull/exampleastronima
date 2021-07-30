const Discord = require("discord.js");
const botsettings = require(`../botsettings.json`);

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'mod') {
        var modEmbed = new Discord.MessageEmbed()
            .setAuthor('Astronima')
            .setDescription([
                `These are the commands for Mods/owners`,
                `Contact the bot Owner if something isn't working`
            ])
            .addFields(
                { name: '**Moderation**', value: '`kick` `ban` `mute` `unmute` `removerole` `addrole`'},
                { name: '**Chat Moderation**', value: '`warn` `clear` `rules`'},
                { name: "**Utilities**", value: "`announce` `memberinfo`"}
            )
            .setColor("RED")
            .setThumbnail('https://i.imgur.com/sT1z1mW.png')
        return message.channel.send(modEmbed)
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor('Astronima')
            .setDescription([
                `These are the available commands for ${message.guild.name}`,
                `__**[] and <> are there for help and not for use when using a command.**__`,
				`The bot's prefix is: \`${botsettings.prefix}\``
            ])
            .addFields(
                { name: '**Fun**', value: '`hi` `joke` `meme` `8ball` `math` `hello` `music`', inline: true},
                { name: '**Utilities**', value: '`help` `invlink` `report` `schedule` `covid`', inline: true}
            )
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/sT1z1mW.png')
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __**${command.config.description || "There is no Description for this command."}**__
            - **Command's Usage:** __**${command.config.usage || "No Usage"}**__
            - **Command's Permissions:** __**${command.config.accessableby || "Members"}**__
            - **Command's Aliases:** __**${command.config.aliases || "No Aliases"}**__
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "Get a list of cmds or cmd help",
    usage: "|help",
    accessableby: "Members",
    aliases: []
}