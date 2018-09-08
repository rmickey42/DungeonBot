const commando = require('discord.js-commando');

class StatRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'statrolls',
            group: 'character_creation',
            memberName: 'statrolls',
            description: 'Rolls 4d6, adds the highest 3 rolls, and allows you to allocate the number to one of your stats'
        });
    }

    async run(message, args) {
        let y = 0;
        message.channel.send('Your stat numbers are:');
        for (y = 0; y < 6; y++) {
            let firstRoll = Math.floor(Math.random() * 6) + 1;
            let secondRoll = Math.floor(Math.random() * 6) + 1;
            let thirdRoll = Math.floor(Math.random() * 6) + 1;
            let fourthRoll = Math.floor(Math.random() * 6) + 1;
            let smallestRoll = Math.min(firstRoll, secondRoll, thirdRoll, fourthRoll);
            if (smallestRoll === firstRoll) {
                let possibleStatOne = secondRoll + thirdRoll + fourthRoll;
                message.channel.send(possibleStatOne);
            }
            else if (smallestRoll === secondRoll) {
                let possibleStatTwo = firstRoll + thirdRoll + fourthRoll;
                message.channel.send(possibleStatTwo);
            }
            else if (smallestRoll === thirdRoll) {
                let possibleStatThree = firstRoll + secondRoll + fourthRoll;
                message.channel.send(possibleStatThree);
            }
            else if (smallestRoll === fourthRoll) {
                let possibleStatFour = firstRoll + secondRoll + thirdRoll;
                message.channel.send(possibleStatFour);
            }
            
        }
    }
}

module.exports = StatRollCommand;