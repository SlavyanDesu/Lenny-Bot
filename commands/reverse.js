exports.run = async (client, message, args) => {
  if (args.length < 1)
    return message.reply('you must provide a texts!');
  message.channel.send(args.join(' ').split('').reverse().join(''));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'reverse',
  description: 'Reverses the text you input.',
  usage: `${config.prefix}reverse <text>`,
  category: 'Fun'
};
