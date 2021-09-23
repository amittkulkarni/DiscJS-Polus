const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite Me",
        "https://img.icons8.com/ultraviolet/2x/email-open--v2.gif"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "https://discord.com/oauth2/authorize?client_id=868234843937447958&permissions=868234843937447958&scope=bot"
      )
  );
};
exports.help = {
  name: "invite",
};
