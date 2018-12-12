exports.run = (client, message, args) => {
  if (message.author.id !== client.config.ownerID)
    return message.reply('you don\'t have permission for this!');
  if (!args || args.size < 1)
    return message.reply('please provide a command.');
  const commandName = args[0];
  
  if (!client.commands.has(commandName)) {
    return message.reply('command doesn\'t exist.');
  }
  
  delete require.cache[require.resolve(`./${commandName}.js`)];
  
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`command ${commandName} has been reloaded.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r']
}

const config = require('../config.json');
exports.help = {
  name: 'reload',
  description: 'Reload the command.',
  usage: `${config.prefix}reload`,
  category: 'Owner'
};
