exports.run = (client, message, args) => {
  const m = args.join(' ');
  if (!m)
    return message.reply('you must provide a texts!');
  message.delete().catch(O_o=>{});
  message.channel.send(m);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'sayd',
  description: 'Sending your args and then I\'ll delete the command.',
  usage: `${config.prefix}sayd <text>`,
  category: 'Fun'
};
