exports.run = (client, message, args) => {
  let game = args.join(' ').trim();
  if (!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
  message.channel.send(`Successfully changed to **${game}**.`)
    .catch(err => console.log(err));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['set', ' game']
};

const config = require('../config.json');
exports.help = {
  name: 'playing',
  description: 'Change bot playing status.',
  usage: `${config.prefix}playing <game>`,
  category: 'Utility'
};
