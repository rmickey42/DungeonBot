const commando = require('discord.js-commando');

class SaveRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'saveroll',
            group: 'dice',
            memberName: 'saveroll',
            description: 'Rolls a d20 in the event of a characte\'s life hitting zero. If the die rolls above 10, it counts as a success. If it rolls lower, it\'s a failure'
        });
    }

    async run(message, args) {
        let chance = Math.floor(Math.random() * 20) + 1;
        if (chance < 10) {
            message.reply('Your roll failed!');
        }
        else {
            message.reply('Your roll succeeded!');
        }
    }
}

module.exports = SaveRollCommand;