const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  if (!member) 
    return message.reply("please use a valid mention!");
  let img = member.user.displayAvatarURL;
  let avatarembed = new Discord.RichEmbed()
  .setTitle(`${member.user.username}'s avatar`)
  .setColor('BLUE')
  .setImage(img)
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.tag}`);
  
message.channel.send(avatarembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp']
};

const config = require('../config.json');
exports.help = {
  name: 'avatar',
  description: 'Send user\'s avatar.',
  usage: `${config.prefix}avatar [@USER]`,
  category: 'Utility'
};
