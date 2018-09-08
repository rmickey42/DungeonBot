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
      message.channel.send("Searching the archives...");
      if(args.trim() == null) return;
      for(var i = 0; i < listObj.length; i++){
        if(listObj[i].name.toUpperCase() == args.toUpperCase().trim()){
          // this is the monster the player called upon
          message.channel.send("Hit Points: " + listObj[i].hit_points);
          return;
        }
      }
      message.channel.send("Entry not found.");
    }
}

module.exports = bestiaryCmd;
