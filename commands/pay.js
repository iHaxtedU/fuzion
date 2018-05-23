const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  if(!coins[message.author.id]){
    return message.reply("You don't have any FUZCoins! Try Using Command Again")
  }

  let pUser = message.mentions.users.first();
  if (!pUser) return message.channel.send("Please Specify A User")
  if (pUser.id === message.author.id) return message.channel.send("Don't Even Try Tricking Me, (I See You EVERYWHERE)");

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 100
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(!args[1]) return message.channel.send("Please Give An Ammount To Send")
  if(isNaN(parseInt(args[1]))) return message.channel.send("Use A Number!");
  if (message.content.includes("-")) return message.channel.send("Try Doing A Negative Again And I'm Gonna Shove My Negative Foot Up Your Ass!");
  if (message.content.includes(".")) return message.channel.send("Ok I Know Your On Your Period, But None Of That Here!");
  if(sCoins < parseInt(args[1])) return message.reply("Not enough FUZCoins there!");
 

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
     coins: pCoins + parseInt(args[1])
  };
  
  let complete = new Discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor("#43ff14")
  .addField("Transaction Complete", `You Have Payed ${pUser} ${args[1]} FUZCoins`);
  
  message.channel.send(complete);
  
  let botlog = new Discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor("#43ff14")
  .addField("Payment Logged!", `${message.author} Payed ${pUser} ${args[1]} FUZCoins`);
  
  bot.channels.find('name', "bot-logs").send(botlog)
  
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
