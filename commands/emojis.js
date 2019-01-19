exports.run = async (client, message, args, level) => {
  const notAnimated = [];
	const animated = [];
	message.guild.emojis.map(emoji => {
		if (emoji.animated === true) notAnimated.push(emoji.toString());
		else animated.push(emoji.toString());
	});
  
	message.channel.send(notAnimated.join(' ') + '\n\n' + animated.join(' '));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['emoji'],
  permLevel: 'User'
};

exports.help = {
  name: 'emojis',
  category: 'General',
  description: 'Returns all of the emojis in the server.',
  usage: 'emojis'
};
