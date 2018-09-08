const commando = require('discord.js-commando');

class purgeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'Allows the current Dungeon Master to swiftly remove a specified number of messages'
        });
    }

    async run(message, args) {
        if (!message.member.roles.some(r => ['Dungeon Master'].includes(r.name)))
            return message.reply("You do not have the proper permissions to use that command!");

        if (isNaN(args)) return message.reply("You must enter a number!");

        var purgeInt = parseInt(args, 10);

        for (var i = 0; i < Math.floor(purgeInt / 100); i++) {
            const fetched = await message.channel.fetchMessages({ limit: 100 });
            message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
        const fetched = await message.channel.fetchMessages({ limit: ((purgeInt % 100) + 1) });
        message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
}

module.exports = purgeCommand;