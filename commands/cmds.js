const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let m = "**"
  
let help = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("#42ebf4")
.addField(">ping", `Used To Check The Response Time Of The Bot `);

message.channel.send(help);
}

module.exports.help = {
  name: "cmds"
  name: "help"
}
