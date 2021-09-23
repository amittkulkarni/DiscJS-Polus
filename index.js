const Discord = require("discord.js");
const client = new Discord.Client({
  ws: {
    intents: Discord.Intents.ALL,
  },
});
const path = require('path');
const fs = require("fs");
const fetch = require('node-fetch');
const {
  token
} = require("./info.json");
const {
  run
} = require("./commands/Info/help");
require("dotenv").config();

client.commands = new Discord.Collection();

client.on("ready", () => {
  console.log("Bot online");
  let files = fs.readdirSync("./commands");
  fs.readdirSync("./commands").forEach((dirs) => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter((files) =>
        files.endsWith(".js")
    );

    for (const file of commands) {
      let props = require(`./commands/${dirs}/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${commandName} ggwp`);
      client.commands.set(commandName, props);
    }
  });
  client.user.setPresence({
  activity: {
    name: '`help in over 80 servers!',
    type: "LISTENING",
  }});
});


client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;
  let prefix = "`";
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  let commandfile = client.commands.get(cmd);
  if (commandfile) {
    commandfile.run(client, message, args);
  }
});

client.on("guildMemberAdd", (member) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Welcome to my server!")
    .setDescription(
      `Thank you for joining my server! Make sure to stay active and talk to the other members!\n**Current Member Count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}`
    )
    .setColor("#03b6fc")
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

  member.send(embed);
});

client.login(token);
