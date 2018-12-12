exports.run = (client, message) => {
  client.user.setStatus('online');
  message.channel.send('Successfully changed to **online**.');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'online',
  description: 'Set bot status to online.',
  usage: `${config.prefix}online`,
  category: 'Utility'
};
