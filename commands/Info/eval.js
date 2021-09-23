exports.run = async(client, message, args) => {
    const { inspect } = require('util');
    if (message.author.id != "478610182625034243" &&
        message.author.id != "287888563020890138"
    ) return;

    let evaled;
    try {
      evaled = eval(args.join(' '));
      message.channel.send(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error during evaluation.');
    }
};

exports.help = {
    name: "eval",
};
