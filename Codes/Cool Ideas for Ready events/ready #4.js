const client = require("../index");
const chalk = require('chalk') //Chalk Package


client.on('ready', () => {
  client.user.setActivity(` b!help`, { type: 'LISTENING' })

console.log(
  chalk.green.bold(`[Done] | ✔️  starting..`)
);
console.log(
  chalk.green.bold(`[Done] | ✔️  logged in as ${client.user.username}`)
);
console.log(
  chalk.green.bold(`[Done] | ✔️  loaded servers [${client.guilds.cache.size}]`)
);
console.log(
  chalk.green.bold(`[Done] | ✔️  loaded users [${client.users.cache.size}]`)
);
console.log(
  chalk.green.bold(`[Done] | ✔️  loaded channels [${client.channels.cache.size}]`)
);

})