exports.run = async (client, message, args) => {
  message.channel.send("Calculating ping...").then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;

    message.channel.send(
      `Bot Latency: ${ping}, API Latency: ${client.ws.ping}`
    );
  });
};
exports.help = {
  name: "invite",
};
