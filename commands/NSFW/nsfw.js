const discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) {
    return message.channel.send('This command only works in nsfw channels.')}
    const Embed = new discord.MessageEmbed()
        .setTitle("NSFW commands (Usage: `ass)")
        .setDescription("`69` `boobs` `amateur` `asian` `ass` `pgif` `fingering` `cum` `brunette` `anal` `milf` `teen` `hardcore`")
        .setColor('#03b6fc')
        .setFooter('Thanks to Allenite for nudes');
    message.channel.send(Embed);
  };
  exports.help = {
    name: 'nsfw',
  };
