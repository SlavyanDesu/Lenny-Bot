module.exports = async (client, message) => {
  if (message.author.bot) return;
  
  if (message.content === `<@${client.user.id}>` || message.content === `<@!{client.user.id}>`)
    return message.channel.send(`Hello ${message.author.username}, my prefix is **${client.config.prefix}**`);
  
  if (message.content.startsWith('Foo') || message.content.startsWith('foo'))
    return message.channel.send('Bar!');
  
  if (!message.content.startsWith(client.config.prefix)) return;
  
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command)
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command isn't available on DM.");
  cmd.run(client, message, args);
};
