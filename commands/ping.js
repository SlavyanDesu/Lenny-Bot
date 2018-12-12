exports.run = async(client, message) => {
  const m = await message.channel.send(':ping_pong: | Pong! Bot latency: ms. API latency: ms.')
  m.edit(`:ping_pong: | Pong! Bot latency: ${m.createdTimestamp - message.createdTimestamp}ms. API latency: ${Math.round(client.ping)}ms.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p']
};

const config = require('../config.json');
exports.help = {
  name: 'ping',
  description : 'Check the bot and API latency.',
  usage: `${config.prefix}ping`,
  category: 'Utility'
};
