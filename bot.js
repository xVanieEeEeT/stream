const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';


client.on('ready', async => {
        client.user.setGame('- Paaain , xxx .', "https://www.twitch.tv/9ivv");
        console.log('Streaming.');
    }
});

client.login(process.env.BOT_TOKEN);
