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
    // message.member.roles.add("811974397899833394").catch(console.warn); //Put your mute role ID HERE

  } 
