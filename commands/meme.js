const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports.run = async (bot, message, args) => {

    const responsesMeme = [
        'Can this make you laugh?',
        'Ha! You smiled! I think...',
        'You laughing yet?',
        'This meme kills you with laughter',
        'Take this meme to the grave...',
        'Memes rule!',
        'Can SMG4 beat a meme this spicy!?',
        'That is one hot meme',
        'Its dangerous without a meme!',
        'Surprise! its a meme!',
        'Interesting...',
        'LMAO!',
        'A meme a day keeps pepe at bay',
        'MEMES!!!',
        'Take this...',
        'Behold! A MEME!',
        'Here is a MEME!'
    ];

    const memeResponse = responsesMeme[Math.floor(Math.random() * responsesMeme.length)];

    https.get(url, (result) => {
        var body = ''
        result.on('data', (chunk) => {
            body += chunk
        })

        result.on('end', () => {
            var response = JSON.parse(body)
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

            if (index.post_hint !== 'image') {

                var text = index.selftext
                const textembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})\n\n${text}`)
                    .setURL(`https://reddit.com/${subRedditName}`)

                message.channel.send(textembed)
            }

            var image = index.preview.images[0].source.url.replace('&amp;', '&')
            var title = index.title
            var link = 'https://reddit.com' + index.permalink
            var subRedditName = index.subreddit_name_prefixed

            if (index.post_hint !== 'image') {
                const textembed = new Discord.RichEmbed()
                    .setTitle(subRedditName)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})\n\n${text}`)
                    .setURL(`https://reddit.com/${subRedditName}`)

                message.channel.send(textembed)
            }
            console.log(image);
            const imageembed = new Discord.MessageEmbed()
                .setTitle(subRedditName)
                .setImage(image)
                .setColor(9384170)
                .setDescription(`[${title}](${link})`)
                .setURL(`https://reddit.com/${subRedditName}`)
            message.channel.send(memeResponse).then((message) => {
                message.edit(imageembed);
            })
        }).on('error', function (e) {
            console.log('Got an error: ', e)
        })
    })
},

module.exports.config = {
    name: "meme",
    description: "Get a meme!",
    usage: "|meme",
    accessableby: "Members",
    aliases: []
}