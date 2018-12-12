exports.run = (client, message) => {
  if (Math.floor(Math.random() * (2)) == 0) 
    return message.channel.send("**" + message.author.username.replace(/@/g, '@\u200b') + ("** got **Heads**."));
  else message.channel.send("**" + message.author.username.replace(/@/g, '@\u200b') + ("** got **Tails**."));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: "coinflip",
  description: "Flip a coin.",
  usage: `${config.prefix}coinflip`,
  category: 'Fun'
};
