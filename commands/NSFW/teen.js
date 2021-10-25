const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) {
    return message.channel.send('This command only works in nsfw channels.')}
    const response = await fetch("https://allenite.herokuapp.com/api/pgif?type=teen");
    const body = await response.json();
    
    message.channel.send(body.result);
   }; 
  exports.help = {
    name: "teen"
  };
