const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let help = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("#42ebf4")
.addField(">ping, "**Used To Check The Response Time Of The Bot")
.addField(">coins", "**Check How Many FUZCoins You Have")
.addField(">pay", "**Pay Someone An Ammount Of FUZCoins");

message.channel.send(help);
}

module.exports.help = {
  name: "cmds","help"
}
