const commando = require('discord.js-commando');

class d20Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd20',
            group: 'dice',
            memberName: 'd20',
            description: 'Rolls the die of the check, the D20'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 20);
        var roll = chance + 1
        message.channel.send('Your d20 landed on ' + roll);
    }
}

module.exports = d20Command;