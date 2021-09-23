exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()
      .setTitle('Commands:')
      .setColor('#03b6fc')
      .addField('`kick', 'kicks the user from the server.')
      .addField('`ban', 'bans the user from the server.')
      .addField('`meme', 'sends a random meme from r/HolUp.')
      .addField('`invite', 'sends the bot\'s invite link')
      .addField('`purge [number]', 'deletes the number of messages you state.')
      .addField('`ping', 'shows the Latency of the bot and API.')
      .addField(
          '`nsfw',
          'shows a nsfw image of the category you choose, Type ``nsfw` to get list of all categories.',
      )
      .addField('`wolfram', 'solves any problem and gives information and statistics of literally anything you could imagine')
      .setFooter(`Made by ItsMeAmit#1051`);
  message.channel.send(embed);
};
exports.help = {
  name: 'help',
};
