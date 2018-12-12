const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const status = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline/Invisible'
};

exports.run = (client, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  if (!member)
    return message.reply('please provide a valid mention!');
  let bot;
  if (member.user.bot === true) {
    bot = 'Yes.';
  } else {
    bot = 'No.';
  }
  
  let userembed = new Discord.RichEmbed()
  .setThumbnail(member.user.displayAvatarURL)
  .addField(':notepad_spiral: | Username', member.user.tag)
  .addField(':iphone: | Status', status[member.user.presence.status])
  .addField(':video_game: | Playing', member.user.presence.game ? member.user.presence.game.name : 'Not playing anything.')
  .addField(':notepad_spiral: | ID', member.user.id)
  .addField(':robot: | Bot?', bot)
  .addField(':briefcase: | Roles', member.roles.filter(r => r.id !== message.guild.id).map(roles => roles.name).join(" **, ** ") || 'Doesn\'t have any role.')
  .addField(':inbox_tray: | Created At', moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"))
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.tag}`)
  
  message.channel.send(userembed);
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uinfo', ' who', ' dare', ' whois']
};

const config = require('../config.json');
exports.help = {
  name: 'userinfo',
  description: 'Sending a basic user informations.',
  usage: `${config.prefix}userinfo [@USER]`,
  category: 'Utility'
}
