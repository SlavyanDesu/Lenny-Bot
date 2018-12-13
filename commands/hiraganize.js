const jp = require('jp-conversion');

exports.run = (client, message, args) => {
  const text = args.join(' ');
  if (!text)
    return message.reply('please provide a texts!');
  
  const result = jp.convert(text);
  console.log(result)
  
  message.channel.send(`${result.hiragana}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hiragana']
};

const config = require('../config.json');
exports.help = {
  name: 'hiraganize',
  description: 'Convert roman alphabets to hiragana.',
  usage: `${config.prefix}hiraganize <text>`,
  category: 'Fun'
};
