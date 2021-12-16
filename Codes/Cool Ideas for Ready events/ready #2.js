const client = require("../index");
const chalk = require("chalk")


client.on("ready", () => {
    client.user.setActivity(` !`, { type: 'LISTENING' })

    //Variables

    const starting = chalk.black.bold;
    const loggedIn = chalk.green.bold;
    const server = chalk.blue.bold;
    const users = chalk.green.bold;
    const channels = chalk.black.bold;
    const website = chalk.magenta.bold;

    const done = chalk.green.bold;
    const commands = chalk.red.bold;
    //-------

    //console logging
    console.log(loggedIn(`[API] • Logged In As ${client.user.username}!`))


    console.log(""),
    console.log(chalk.magenta.bold("——————————[Servers & Users]——————————"));
    console.log(

  );

    console.log(server(`[API] • Loaded ${client.guilds.cache.size} Servers!!`)),
    console.log(users(`[API] • Loaded ${client.users.cache.size} Users!`)),
    console.log(channels(`[API] • Loaded ${client.channels.cache.size} Channles!`));

    console.log("");
    console.log(chalk.blue.bold("——————————[Commands]——————————"));
    console.log(

  );
    console.log(commands(`[Api] • Loaded ${client.commands.size} Commands!`))
}
) 