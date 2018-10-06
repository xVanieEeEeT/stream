const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';


client.on('message', message => {
    if(message.content.startsWith('st')) {
        if(!message.author.id === '410778583682777098') return;
        var arg = message.content.split(' ').slice(1).join(' ');
        client.user.setGame(arg, "https://www.twitch.tv/9ivv");
        console.log('Streaming.');
    }
});

client.login(process.env.BOT_TOKEN);
