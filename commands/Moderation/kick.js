exports.run = async (client, message, args) => {
  if (message.author.id != '733637163798757457' && message.author.id != "478610182625034243")
    return message.channel.send(
      "You simply aren't cultured enough to execute this command!"
    );
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!member) return message.channel.send("Invalid Member Given!");
  if (member.roles.highest.position > message.member.roles.highest.position)
    return message.channel.send(
      "You cannot ban someone with more power than you"
    );
  let reason = args.slice(1).join(" ");
  if (!reason) {
    reason = "No reason";
  }
  member.kick(reason);
  message.channel.send(
    `**${member.user.tag}** has been kicked for ${reason} lol`
  );
};
exports.help = {
  name: "kick",
};
