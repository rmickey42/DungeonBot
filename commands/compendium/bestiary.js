const commando = require('discord.js-commando');
const fs = require("fs");

var content;

class bestiaryCmd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bestiary',
            group: 'compendium',
            memberName: 'bestiary',
            description: 'Gets the information of a monster from the bestiary.'
        });
        content = fs.readFileSync("monsters.txt");
    }

    async run(message, args) {
      message.channel.send("Searching the archives...");
      let listObj = JSON.parse(content);
      if(args.trim() !== null) return;
      message.channel.send("Hit Points: " + listObj[0].hit_points);
      for(var i = 0; i < listObj.length; i++){
        if(listObj[i].name.toUpperCase() == args.toUpperCase().trim()){
          message.channel.send("Hit Points: " + listObj[i].hit_points);
          return;
        }
      }
      message.channel.send("Entry not found.");
    }
}

module.exports = bestiaryCmd;
