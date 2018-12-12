exports.run = (client, message, args) => {
  let m = args.join(' ');
  if (!m)
    return message.reply('please provide a text!');
  message.channel.send(m);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['text', ' speak', ' s']
};

const config = require('../config.json');
exports.help = {
  name: 'say',
  description: 'A say command.',
  usage: `${config.prefix}say <text>`,
  category: 'Fun'
};
