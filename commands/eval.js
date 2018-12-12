const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  if(message.author.id !== client.config.ownerID)
    return message.reply('you don\'t have permission for this!');
  
  try{
    let codein = args.join(' ');
    let code = eval(codein);
    
    if(typeof code !== 'string')
      code = require('util').inspect(code, { depth: 0});
    
    let evalembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField(":inbox_tray: | Input", `\`\`\`js\n${codein}\`\`\``)
    .addField(":outbox_tray: | Output", `\`\`\`js\n${code}\n\`\`\``)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.tag}`)
    
    message.channel.send(evalembed)
    } catch(e) {
      message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ev']
};

const config = require('../config.json');
exports.help = {
  name: "eval",
  description: 'Evaluates a javascript arbitary.',
  usage: `${config.prefix}eval <code>`,
  category: 'Owner'
};
