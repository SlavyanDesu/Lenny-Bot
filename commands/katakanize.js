const jp = require('jp-conversion');

exports.run = (client, message, args) => {
  const text = args.join(' ');
  if (!text)
    return message.reply('please provide a texts!');
  
  const result = jp.convert(text);
  console.log(result)
  
  message.channel.send(`${result.katakana}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['katakana']
};

const config = require('../config.json');
exports.help = {
  name: 'hiraganize',
  description: 'Convert roman alphabets to katakana.',
  usage: `${config.prefix}katakanize <text>`,
  category: 'Fun'
};
