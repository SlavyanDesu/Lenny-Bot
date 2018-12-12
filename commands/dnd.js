exports.run = (client, message) => {
  if (message.author.id !== client.config.ownerID)
    return message.reply('you don\'t have permission for this!');
  client.user.setStatus('dnd');
  message.channel.send('Successfully changed to **dnd**.');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'dnd',
  description: 'Set bot status to dnd.',
  usage: `${config.prefix}dnd`,
  category: 'Owner'
};
