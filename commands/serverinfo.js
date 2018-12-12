const Discord = require('discord.js');

exports.run = (client, message) => {
  const region = {
    singapore: ':flag_sg: Singapore',
    japan: ':flag_jp: Japan',
    brazil: ':flag_br: Brazil',
    hongkong: ':flag_hk: Hong Kong',
    russia: ':flag_ru: Russia'
  };
  
  let sicon = message.guild.iconURL;
  
  let serverembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(sicon)
  .setTimestamp()
  .addField(':notepad_spiral: | Server Name', message.guild.name)
  .addField(':earth_asia: | Server Location', region[message.guild.region])
  .addField(':white_check_mark: | Verification Level', `Level ${message.guild.verificationLevel}`)
  .addField(':notepad_spiral: | Total Channel', message.guild.channels.size)
  .addField(':notepad_spiral: | Total Member', message.guild.memberCount)
  .addField(':notepad_spiral: | Current Channel ID', message.channel.id)
  .addField(`:briefcase: | Server Roles [${message.guild.roles.size}]`, message.guild.roles.map(roles => roles).join(' \n '))
  .addField(':alarm_clock: | Created At', message.guild.createdAt)
  .addField(':inbox_tray: | Joined At', message.member.joinedAt)
  .addField(':bust_in_silhouette: | Server Owner', message.guild.owner)
  .setFooter(`Requested by: ${message.author.tag}`);
  
  message.channel.send(serverembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sinfo', ' server']
};

const config = require('../config.json');
exports.help = {
  name: "serverinfo",
  description: 'Sending a basic server informations.',
  usage: `${config.prefix}serverinfo`,
  category: 'Utility'
};
