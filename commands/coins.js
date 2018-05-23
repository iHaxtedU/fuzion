const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 100
  };
}
  

let uCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("00FF00")
.addField("You Have", `${uCoins} FUZCoins`);
  
message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
  
};

module.exports.help = {
  name: "coins"
}
