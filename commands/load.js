exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
    if (!args || args.length < 1) return message.reply('You must provide a command to load!');

    let response;
    response = client.loadCommand(args[0]);
    if (response) return message.reply(`Error Loading: ${response}`);

    client.logger.log(`Loading Command: ${args[0]}`);
    message.reply(`The command \`${args[0]}\` has been loaded`);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Bot Moderator'
};

exports.help = {
  name: 'load',
  category: 'System',
  description: 'Loads a command',
  usage: 'load [command]'
};