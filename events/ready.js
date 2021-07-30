const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)

    const activities_list = [
        'with People and seeing if they make invite links...',
        'and watching Twitch.tv/TiaYerba',
        'Among Us',
        'YouTube Videos',
        'past uncleyerba videos',
        'while Triple/Ayane works on me :D',
        'and giving Triple/Ayane a hard time >:D',
        'Among us but Tia is just standing there... menacingly!!',
        'Among us and Eternalcs is the impostor...',
        'DoN\'t MuuRrDerr MeEe!!!',
        'with people in 14 servers :D',
        'Playing Rocket League',
        'Mmmm, Steak...',
        'Code is complicated...',
        'Help in 7 languages!',
        'Bonjour!',
        'You win some, you lose some...'
    ]; // creates an arraylist containing phrases you want your bot to switch through.

        setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 120000); // Runs this every 10 seconds.
};