const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    const response = await fetch("https://allenite.herokuapp.com/api/pgif?type=asian");
    const body = await response.json();
    
    message.channel.send(body.result);
   }; 
  exports.help = {
    name: "asian"
  };
