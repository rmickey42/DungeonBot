const commando = require('discord.js-commando');

class stat2ModCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stat2mod',
            group: 'character_creation',
            memberName: 'stat2mod',
            description: 'Converts a stat number into a modifier.'
        });
    }

    async run(message, args) {
        var stat = args[0];
        message.channel.send("Modifier: " + ((stat-10)/2));
    }
}

module.exports = stat2ModCmd;
