const commando = require('discord.js-commando');

class d6Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd6',
            group: 'dice',
            memberName: 'd6',
            description: 'Rolls the die familiar to all, the D6'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 6);
        var roll = chance + 1
        message.channel.send('Your d6 landed on ' + roll);
    }
}

module.exports = d6Command;