const Commando = require('discord.js-commando');
const bot = new Commando.Client({ commandPrefix: '~' });
const TOKEN = 'NDg0NDgxMTQ3Mzg5MzQ1Nzky.Dpmr1w._9wixrkpp5R3Q8zccfZbnM6NvHc';

bot.registry.registerGroup('dice', 'Dice Rolls');
bot.registry.registerGroup('character_creation', 'Character Creation');
bot.registry.registerGroup('compendium', 'Compendium');
bot.registry.registerGroup('admin', 'DM Tools');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('ready', function () {
    console.log('Ready');
});


bot.login(TOKEN);
