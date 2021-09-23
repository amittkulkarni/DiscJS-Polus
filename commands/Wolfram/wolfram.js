exports.commands = ["wolfram"];
exports.usage = "<search terms>";
exports.description = "gives results from wolfram alpha using search terms";

let wa = require("./wolfram_plugin");
let wolfram_plugin = new wa();

exports.run = async (client, msg, args) => {
  if (args.length == 0) {
    msg.channel.send(
      "Usage: " +
        Config.commandPrefix +
        "wolfram <search terms> (Ex. " +
        Config.commandPrefix +
        "wolfram integrate 4x)"
    );
  } else {
    let message = msg.channel.send("*Querying Wolfram Alpha...*");
    wolfram_plugin.respond(args.join(" "), msg.channel, client, message);
  }
};
