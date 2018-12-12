const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(' D [days], H [hours], m [minutes], s [seconds] ');
  let botembed = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor('Lenny Bot v0.2.5-stable', client.user.displayAvatarURL)
  .setThumbnail(client.user.displayAvatarURL)
  .setTimestamp()
  .addField('Bot ID', client.user.id)
  .addField('Uptime', duration)
  .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField('Prefix', client.config.prefix)
  .addField('discord.js', `v${Discord.version}`)
  .setFooter(`Requested by: ${message.author.tag}`)
  
  message.channel.send(botembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['binfo', ' me', ' bot']
};

const config = require('../config.json');
exports.help = {
  name: "botinfo",
  description: "Sending a basic bot information.",
  usage: `${config.prefix}botinfo`,
  category: 'Utility'
};
