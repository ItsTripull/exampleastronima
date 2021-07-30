const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let covidArray = message.content.split(" ");
    let covidArgs = covidArray.slice(1);
    let countries = covidArgs

    //Credit to Sarastro#7725 for the command :)

    const noArgs = new Discord.MessageEmbed()
    .setTitle('Missing arguments')
    .setColor(0xFF0000)
    .setDescription('You are missing some args (ex: |covid all || |covid Canada)')
    .setTimestamp()

    if(!covidArgs[0]) return message.channel.send(noArgs);

    if(covidArgs[0] === "world") {
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const allEmbed = new Discord.MessageEmbed()
            .setTitle(`Worldwide COVID-19 Stats 🌎`)
            .addField('Confirmed Cases', confirmed)
            .addField('Recovered', recovered)
            .addField('Deaths', deaths)

            message.channel.send(allEmbed)
        })
    } else {
        fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats for **${countries}**`)
            .addField('Confirmed Cases', confirmed)
            .addField('Recovered', recovered)
            .addField('Deaths', deaths)

            message.channel.send(embed)
        }).catch(e => {
            return message.channel.send('Invalid country provided')
        })
    }
}

module.exports.config = {
    name: "covid",
    description: "Get Covid stats",
    usage: "|covid",
    accessableby: "Members",
    aliases: ["covid-19"]
}