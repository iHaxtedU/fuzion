const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}
  
let user1 = message.mentions.users.first()
let ccoins = coins[user1.user.id].coins;
if(!coins[user1.id]){
  coins[user1.id] = {
    coins: 100
  };
}
let uCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("00FF00")
.addField("You Have", `${uCoins} FUZCoins`);
  
  
if(!user1) message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
  
if(user1){
message.channel.send(ccoins);
}
};

module.exports.help = {
  name: "coins"
}
