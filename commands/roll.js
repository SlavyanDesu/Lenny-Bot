exports.run = (client, message) => {
  let roll = Math.floor(Math.random() * 6) + 1;
  message.reply(`you got **${roll}**.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dice']
};

const config = require('../config.json');
exports.help = {
  name: 'roll',
  description: 'Roll a dice.',
  usage: `${config.prefix}roll`
};
