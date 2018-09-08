const commando = require('discord.js-commando');

class d12Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd12',
            group: 'dice',
            memberName: 'd12',
            description: 'Rolls the die of the dozen, the D12'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 12);
        var roll = chance + 1
        message.channel.send('Your d12 landed on ' + roll);
    }
}

module.exports = d12Command;