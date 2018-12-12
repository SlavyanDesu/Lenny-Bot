const figlet = require("figlet");

exports.run = (client, message, args) => {
  figlet(args.join(' '), function(err, data) {
    if (err) {
      console.log('There is something wrong!');
      console.dir(err);
      return;
    };
    message.channel.send("```" + data + "```")
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['art']
};

const config = require('../config.json');
exports.help = {
  name: 'ascii',
  description: 'Making an ASCII art.',
  usage: `${config.prefix}ascii <text>`,
  category: 'Fun'
};
