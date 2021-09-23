const fetch = require("node-fetch");
const discord = require("discord.js");
const link = "https://www.reddit.com/r/HolUp.json?sort=hot";

exports.run = async (client, message, args) => {
  let fetchMemes = await fetch(link).then((m) => m.json());
  const getMemes = fetchMemes.data.children;
  let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)];
  let memeEmbed = new discord.MessageEmbed()
    .setImage(randomMeme.data.url)
    .setColor("#ff0000")
    .setFooter("Made by ItsMeAmit#1051");
  message.channel.send(memeEmbed);
};
exports.help = {
  name: "meme",
};
