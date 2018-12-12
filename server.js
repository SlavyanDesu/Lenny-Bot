const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({ fetchAllMembers: true, disableEveryone: true });
const config = require('./config.json');

client.config = config;

fs.readdir('./events/', (err, files) => {
  if (err)
    return console.log(err);
  files.forEach(file => {
    let event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err)
    return console.log(err);
  files.forEach(f => {
    if (!f.endsWith('.js')) return;
    let props = require(`./commands/${f}`);
    console.log(`Loadinh ${props.help.name} command... done!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(config.token);
