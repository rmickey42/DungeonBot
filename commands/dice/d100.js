const commando = require('discord.js-commando');

class d100Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd100',
            group: 'dice',
            memberName: 'd100',
            description: 'Rolls the most extravagant die of them all, the D100'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 100);
        var roll = chance + 1
        message.channel.send('Your d100 landed on ' + roll);
    }
}

module.exports = d100Command;