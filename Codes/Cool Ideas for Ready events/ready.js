const client = require("../index");
const chalk = require("chalk")
const { red, green, blue, yellow, cyan } = require('chalk'); // npm i chalk (you can use colors too)

client.on("ready", () => {
    client.user.setActivity(` !`,`/`, { type: 'LISTENING' })

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

    const backslash = String.raw` \ `;
    const prefix = "/, !"; //put your prefix(s) here


    console.log(``);
    console.log(green(`                                                     `)); //Put your Bot Name here
    console.log(``);
    console.log(``);
    console.log(yellow('               + ================================================================================== +'));
    console.log(cyan(`                                [i] :: ${prefix}help                     :: Displays commands.                   `));
    console.log(cyan(`                                [i] :: ${prefix}ping                     :: Displays bots ping.                  `));
    console.log(yellow('               + ================================Commands========================================== +'));
    console.log(cyan(`                       Author   [i] :: Programmed by [Your name here]        :: © 2021 Development                   `));
    console.log(cyan(`                       Bot info [i] :: Status                       :: ✅ Online                           `));
    console.log(cyan(`                       Users    [i] ::                              :: ${client.users.cache.size}  Users   `));
    console.log(cyan(`                       Guilds   [i] ::                              :: ${client.guilds.cache.size} Guilds  `));
    console.log(cyan(`                       Channels [i] ::                              :: ${client.channels.cache.size} Channles`));
    console.log(cyan(`                       commands [i] ::                              :: ${client.commands.size} Commands`));
    console.log(yellow('               + ================================Website=========================================== +'));
    console.log(cyan(`                       Link     [i] ::        [yourdomain]          ::  Website                          `));
    
    
        
    console.log(red("Press [CTRL + C] to stop the Terminal ..."))
    }); 
