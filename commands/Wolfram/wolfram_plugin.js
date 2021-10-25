let Discord = require("discord.js");
let Wolfram = require("node-wolfram");

function WolframPlugin() {
  this.wolfram = new Wolfram("86GTEG-6URQY7HW6T");
}

WolframPlugin.prototype.respond = async function (
  query,
  channel,
  client,
  tmpMsg
) {
  let result;
  try {
    let promise = new Promise((resolve, reject) => {
      this.wolfram.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    result = await promise;
  } catch (err) {
    console.log(err);
    (await tmpMsg).edit("Couldn't talk to Wolfram Alpha :(");
  }

  if (result.queryresult.$.success == "true") {
    (await tmpMsg).delete();
    if (result.queryresult.hasOwnProperty("warnings")) {
      for (let i in result.queryresult.warnings) {
        for (let j in result.queryresult.warnings[i]) {
          if (j != "$") {
            try {
              await channel.send(result.queryresult.warnings[i][j][0].$.text);
            } catch (e) {
              console.log(
                "WolframAlpha: failed displaying warning:\n" + e.stack()
              );
            }
          }
        }
      }
    }
    if (result.queryresult.hasOwnProperty("assumptions")) {
      for (let i in result.queryresult.assumptions) {
        for (let j in result.queryresult.assumptions[i]) {
          if (j == "assumption") {
            try {
              await channel.send(
                `Assuming ${result.queryresult.assumptions[i][j][0].$.word} is ${result.queryresult.assumptions[i][j][0].value[0].$.desc}`
              );
            } catch (e) {
              console.log(
                "WolframAlpha: failed displaying assumption:\n" + e.stack()
              );
            }
          }
        }
      }
    }
    for (let a = 0; a < result.queryresult.pod.length; a++) {
      let pod = result.queryresult.pod[a];
      const title = "**" + pod.$.title + "**:";
      let embeds = [];
      for (let b = 0; b < pod.subpod.length; b++) {
        let subpod = pod.subpod[b];
        //can also display the plain text, but the images are prettier
        /*for(let c=0; c<subpod.plaintext.length; c++)
				{
					response += '\t'+subpod.plaintext[c];
				}*/
        for (let d = 0; d < 5; d++) {
          let embed = new Discord.MessageEmbed();
          embed.title = title;
          if (subpod.$.title.length > 0) {
            embed.description = subpod.$.title;
          }
          embed.type = "image";
          embed.image = { url: subpod.img[d].$.src };
          embed.color = 0xff9339;
          embed.provider = {
            name: "WolframAlpha",
            url: "https://www.wolframalpha.com/",
          };
          await channel.send("", embed);
        }
      }
    }
  } else {
    if (result.queryresult.hasOwnProperty("didyoumeans")) {
      let msg = [];
      for (let i in result.queryresult.didyoumeans) {
        for (let j in result.queryresult.didyoumeans[i].didyoumean) {
          msg.push(result.queryresult.didyoumeans[i].didyoumean[j]._);
        }
      }
      (await tmpMsg).edit("Did you mean: " + msg.join(" "));
    } else {
      (await tmpMsg).edit("No results from Wolfram Alpha :(");
    }
  }
};

module.exports = WolframPlugin;
