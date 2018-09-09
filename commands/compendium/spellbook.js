const commando = require('discord.js-commando');
const fs = require("fs");

var content;
var listObj

class bestiaryCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spellbook',
            group: 'compendium',
            memberName: 'spellbook',
            description: 'Gets the information of a spell from the spellbook.'
        });
        content = fs.readFileSync(__dirname + "/spells.txt");
        listObj = JSON.parse(content);
        console.log("Parsed spellbook.");
    }

    async run(message, args) {
           message.channel.send("Searching the archives... Please hold on, this may take some time.");
            if (args.trim() == null) return;
            for (var i = 0; i < listObj.length; i++) {
                if (listObj[i].name.toUpperCase() == args.toUpperCase().trim()) {
                    // this is the monster the player called upon
                    message.channel.send("__**" + listObj[i].name + "**__");
                    message.channel.send("Description: " + listObj[i].desc.replace("<p>", "").replace("</p>", ""));
                    if(listObj[i].higher_level !== undefined) message.channel.send("At Higher Levels: " + listObj[i].higher_level.replace("<p>", "").replace("</p>", ""));
                    if(listObj[i].range !== undefined) message.channel.send("Range: " + listObj[i].range);
                    if(listObj[i].components !== undefined) message.channel.send("Components: " + listObj[i].components);
                    if(listObj[i].materials !== undefined) message.channel.send("Materials: " + listObj[i].material);
                    if(listObj[i].ritual !== undefined) message.channel.send("Is Ritual: " + listObj[i].ritual);
                    if(listObj[i].duration !== undefined) message.channel.send("Duration: " + listObj[i].duration);
                    if(listObj[i].concentration !== undefined) message.channel.send("Is Concentration: " + listObj[i].concentration);
                    if(listObj[i].casting_time !== undefined) message.channel.send("Casting Time: " + listObj[i].casting_time);
                    if(listObj[i].level !== undefined) message.channel.send("Level: " + listObj[i].level);
                    if(listObj[i].school !== undefined) message.channel.send("School: " + listObj[i].school);
                    if(listObj[i].class !== undefined) message.channel.send("Class: " + listObj[i].class);
                    return;
                }
            }
            message.channel.send("Entry not found.");
    }
}

module.exports = bestiaryCmd;
