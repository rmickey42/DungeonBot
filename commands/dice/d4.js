const commando = require('discord.js-commando');

class d4Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd4',
            group: 'dice',
            memberName: 'd4',
            description: 'Rolls the most basic of die, the D4'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 4);
        if (chance === 0) {
            chance = chance + 1;
            message.channel.send('Your d4 landed on ' + chance);
        }
        else if (chance === 1) {
            chance = chance + 1;
            message.channel.send('Your d4 landed on ' + chance);
        }
        else if (chance === 2) {
            chance = chance + 1;
            message.channel.send('Your d4 landed on ' + chance);
        }
        else if (chance === 3) {
            chance = chance + 1;
            message.channel.send('Your d4 landed on ' + chance);
        }
    }
}

module.exports = d4Command;