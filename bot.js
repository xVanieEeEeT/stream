
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if(!message.author.id === '410778583682777098') return;
    if(!message.channel.guild) return;
    if(message.content.startsWith('%%st')) {
        let args = message.content.split(' ').slice(1).join(' ');
        client.user.setGame(`${args}`, "https://twitch.tv/9ivv") 
        .then(console.log('STREAMING')
        )
    }
});

client.login(process.env.BOT_TOKEN);
