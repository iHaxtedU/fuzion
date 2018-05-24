const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let m = "**"
  
let help = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("#42ebf4")
.addField(">ping", `${m} Used To Check The Response Time Of The Bot ${m}`)
.addField(">coins", `${m} Check How Many FUZCoins You Have ${m}`)
.addField(">pay", `${m} Pay Someone An Ammount Of FUZCoins ${m}`);

message.channel.send(help);
}

module.exports.help = {
  name: "cmds","help"
}
