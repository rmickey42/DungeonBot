const commando = require('discord.js-commando');

class bestiaryCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bestiary',
            group: 'compendium',
            memberName: 'bestiary',
            description: 'Gets the information of a monster from the bestiary.'
        });
    }

    async run(message, args) {

    }
}

module.exports = bestiaryCmd;
