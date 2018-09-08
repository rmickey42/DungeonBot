const commando = require('discord.js-commando');
const fs = require('fs');

var bard;
var cleric;
var druid;
var paladin;
var ranger;
var sorcerer;

class classSpellsCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'classspells',
            group: 'compendium',
            memberName: 'classspells',
            description: 'Gives the spells a spellcasting class can cast. Includes Bard, Cleric, Druid, Paladin, Ranger, and Sorcerer.'
        });
        bard = fs.readFileSync(__dirname + "/bardspells.txt");
        cleric = fs.readFileSync(__dirname + "/clericspells.txt");
        druid = fs.readFileSync(__dirname + "/druidspells.txt");
        paladin = fs.readFileSync(__dirname + "/paladinspells.txt");
        ranger = fs.readFileSync(__dirname + "/rangerspells.txt");
        sorcerer = fs.readFileSync(__dirname + "/sorcererspells.txt");
    }

    async run(message, args) {
        let input = args.trim().toUpperCase();
        if(input === "BARD"){
          message.channel.send(bard);
        }else if(input == "CLERIC"){
          message.channel.send(cleric);
        }else if(input == "DRUID"){
          message.channel.send(druid);
        }else if(input == "PALADIN"){
          message.channel.send(paladin);
        }else if(input == "RANGER"){
          message.channel.send(ranger);
        }else if(input == "SORCERER"){
          message.channel.send(sorcerer);
        }else{
          message.channel.send("That class does not exist or cannot cast spells.");
        }
    }
}

module.exports = classSpellsCmd;
