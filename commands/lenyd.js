exports.run = (client, message) => {
  message.channel.send("( ͡° ͜ʖ ͡°)");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: "lenny",
  description: 'Err...',
  usage: `${config.prefix}lenny`,
  category: 'Fun'
};
