//ANTI SCAM LINKS
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
