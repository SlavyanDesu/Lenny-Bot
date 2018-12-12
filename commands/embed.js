const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(args.join(' '))
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.tag}`)
  
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'embed',
  description: 'Embeding some texts.',
  usage: `${config.prefix}embed <text>`,
  category: 'Fun'
};
