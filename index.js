const { Client, Collection } = require("discord.js");
const mongoose = require('mongoose')
const db = require('quick.db')
const colors = require('./colors.json')


const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config");

//blacklist words usage
client.on("messageCreate", async (message) => {
    let words = db.fetch(`blacklistedwords_${message.guildId}`)
    if(words === null) {return;}
    else{
        if(message.author.id === client.user.id) return;
    let blockedWords = words.words;
    let msgContent = message.content.toLowerCase();
    if(blockedWords.some(function(v) { return msgContent.indexOf(v) >= 0; })) {
        message.delete();
        message.channel.send({
            embeds: [{
                title: 'Deleted Message',
                description: `<:no_entry_sign:900589512101613698> <@!${message.author.id}> **your message contained a blacklisted word, hence it has been deleted!**`,

                }]
            }).then(m => {
                setTimeout(() => m.delete(), 5000)
            });
        }
    }
    });

    client.on('messageCreate', async message => {
        const array = require(`./scam.json`)
        if(array.includes(message.content)) {
          message.delete()
          try {
      
      client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).ban({ days: 7, reason: `Steam Scam Link\n(${message.content})` })
          } catch(e) {
            console.log(e)
          }
          message.channel.send({content: `${message.author} was banned due to being hacked (Steam Scam Link)`})
        }
      })

// SELFBOT Detecion
client.on("messageCreate", (message) => {
    CheckForSelfBot(message);
  })
  client.on("messageUpdate", (oldMessage, newMessage) => {
    CheckForSelfBot(newMessage);
  })
  function CheckForSelfBot(message){
    if(!message.guild) return; //we don't care for dms 
    if(message.author.bot) return; // Bots are bots and cant be a selfbot (which is for users)
    if(!message.embeds || message.embeds.length === 0) return; //No embeds attached aka no selfbot 
    if(message.embeds.some(embed => embed.type != "rich")) return; //NO selfbot
    //A valid Self Bot detected
    message.delete().catch(console.warn);
    message.member.kick().catch(console.warn); //kick the selfbot 
    // Mute the member
    // message.member.roles.add("811974397899833394").catch(console.warn);

  }   


//--------------------------------------------------

// Initializing the project
require("./handler")(client);
    
client.login(client.config.token);
