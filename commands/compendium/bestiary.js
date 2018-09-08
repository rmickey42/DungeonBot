const commando = require('discord.js-commando');
const fs = require("fs");

var content;
var listObj

class bestiaryCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bestiary',
            group: 'compendium',
            memberName: 'bestiary',
            description: 'Gets the information of a monster from the bestiary.'
        });
        content = fs.readFileSync(__dirname + "/monsters.txt");
        listObj = JSON.parse(content);
        console.log("Parsed bestiary.");
    }

    async run(message, args) {
        if (message.member.roles.some(r => ['Dungeon Master'].includes(r.name))) {
            message.channel.send("Searching the archives...");
            if (args.trim() == null) return;
            for (var i = 0; i < listObj.length; i++) {
                if (listObj[i].name.toUpperCase() == args.toUpperCase().trim()) {
                    // this is the monster the player called upon
                    message.channel.send("__**General**__");
                    message.channel.send("Name: " + listObj[i].name);
                    message.channel.send("Size: " + listObj[i].size);
                    message.channel.send("Type: " + listObj[i].type);
                    message.channel.send("Alignment: " + listObj[i].alignment);
                    message.channel.send("Armor Class: " + listObj[i].armor_class);
                    message.channel.send("Hit Points: " + listObj[i].hit_points);

                    message.channel.send("__**Special Abilities**__");
                    for(var j = 0; j < listObj[i].special_abilities.length; j++){
                      message.channel.send(listObj[i].special_abilities[j].name + ": " + listObj[i].special_abilities[j].desc);
                    }

                    message.channel.send("__**Actions**__");
                    for(var j = 0; j < listObj[i].actions.length; j++){
                      message.channel.send(listObj[i].actions[j].name + ": " + listObj[i].actions[j].desc);
                    }

                    if(listObj[i].legendary_actions !== null){
                      message.channel.send("__**Legendary Abilities**__");
                      for(var j = 0; j < listObj[i].legendary_actions.length; j++){
                        message.channel.send(listObj[i].legendary_actions[j].name + ": " + listObj[i].legendary_actions[j].desc);
                      }
                    }

                    message.channel.send("__**Stats**__");
                    message.channel.send("Speed: " + listObj[i].speed);
                    message.channel.send("Strength: " + listObj[i].strength);
                    message.channel.send("Dexterity: " + listObj[i].dexterity);
                    message.channel.send("Constitution: " + listObj[i].constitution);
                    message.channel.send("Intelligence: " + listObj[i].intelligence);
                    message.channel.send("Wisdom: " + listObj[i].wisdom);
                    message.channel.send("Charisma: " + listObj[i].charisma);

                    message.channel.send("__**Other**__");
                    message.channel.send("Senses: " + listObj[i].senses);
                    message.channel.send("Languages: " + listObj[i].languages);
                    message.channel.send("Challenge Rating: " + listObj[i].challenge_rating);
                    return;
                }
            }
            message.channel.send("Entry not found.");
        }
        else {
            message.channel.send('You do not have the authority to view the archives of the Dungeon Master.');
        }
    }
}

module.exports = bestiaryCmd;
