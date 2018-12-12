exports.run = (client, message) => {
  message.delete();
  message.channel.send("( ͡° ͜ʖ ͡°)");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: "lennyd",
  description: '( ͡° ͜ʖ ͡°)',
  usage: `${config.prefix}lennyd`,
  category: 'Fun'
};
