const commando = require('discord.js-commando');

class d10Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd10',
            group: 'dice',
            memberName: 'd10',
            description: 'Rolls the die of the number we are all most familiar with, the D10'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 10);
        var roll = chance + 1
        message.channel.send('Your d10 landed on ' + roll);
    }
}

module.exports = d10Command;