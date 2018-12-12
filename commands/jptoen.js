const translate = require('translate');

exports.run = async(client, message, args) => {
  translate.engine = 'yandex';
  translate.key = client.config.API;
  
  const kotoba = args.join(' ');
  if (!kotoba)
    return message.reply('you must provide a texts!');
  
  const result = await translate(kotoba, { from: 'ja', to: 'en'});
  message.channel.send(result);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};

const config = require('../config.json');
exports.help = {
  name: 'jptoen',
  description: 'Translate Japanese to English.',
  usage: `${config.prefix}jptoen <言葉>`,
  category: 'Fun'
};
