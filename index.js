const Commando = require('discord.js-commando');
const bot = new Commando.Client({ commandPrefix: '~' });
const TOKEN = 'NDg0NDgxMTQ3Mzg5MzQ1Nzky.DnMmAw.JtIeHjS0O7knam5EWwFxp2T3vFI';

bot.registry.registerGroup('dice', 'Dice Rolls');
bot.registry.registerGroup('character_creation', 'Character Creation');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('ready', function () {
    console.log('Ready');
});


bot.login(TOKEN);