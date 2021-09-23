exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "You simple aren't cultured enough to execute this command!"
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
    reason = "No reason provided";
  }
  member.ban({ reason: reason, days: 7 });
  message.channel.send(
    `**${member.user.tag}** has been banned for ${reason} lol`
  );
};
exports.help = {
  name: "ban",
};
