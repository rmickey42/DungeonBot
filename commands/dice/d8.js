const commando = require('discord.js-commando');

class d8Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd8',
            group: 'dice',
            memberName: 'd8',
            description: 'Rolls the die as elegant as the diamond it\'s shaped after, the D8'
        });
    }

    async run(message, args) {
        var chance = Math.floor(Math.random() * 8);
        var roll = chance + 1
        message.channel.send('Your d8 landed on ' + roll);
    }
}

module.exports = d8Command;