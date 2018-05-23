const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}
  
let user1 = message.mentions.users.first()
if(!user1) message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
let uCoins = coins[message.author.id].coins;
  
let coinEmbed = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("00FF00")
.addField("You Have", `${uCoins} FUZCoins`);

let usercoins = coins[user1.id].bal;

let usercoin1s = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("#4286f4")
.addField("Here Is The Information You Requested", `${user1.username} Has ${usercoins} FUZCoins`);
 
message.channel.send(usercoin1s).then(msg => {msg.delete(5000)})

}

module.exports.help = {
  name: "coins"
}
