exports.run = async (client, message, args, level) => {
  try {
    const friendly = client.config.permLevels.find(l => l.level === level).name;
    message.reply(`Your permission level is: ${level} - ${friendly}`);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'level',
  category: 'General',
  description: 'Tells you your permission level.',
  usage: 'level'
};
