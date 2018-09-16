const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **+mute** ' ,' **Tempmute** ')
.addField('     **+unmute** ' ,' **UnMute a Member** ')
.addField('     **+ban**  ' ,' **tempbanned some one** ')
.addField('     **+kick** ' , '**Kick someone**')
.addField('     **+prune** ' , '**Clear the chat**')
.addField('     **+addrole** ' ,' **Give SomeOne a Role**')
.addField('     **+removerole** ' ,' **Remove a Role of a Person**')
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});



client.on('message', async message => {
    var moment = require('moment');
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "ban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**- ما معك برمشن**");
       if(!User) message.channel.send("**- Could not find that user**");
       if(User.id === client.user.id) return message.channel.send("**- You cant banned the bot**");
       if(User.id === message.guild.owner.id) return message.channel.send("**- You cant banned the ownership**");
       if(!time) return message.channel.send("**- Type the ban time**");
       if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- Error in the banned time :/**');
       if(!Reason) message.channel.send("**- Type the reason**");
       let banEmbed = new Discord.RichEmbed()
       .setDescription("~Ban~")
       .setColor("#bc0000")
       .addField("Banned User", `${User} with ID ${User.id}`)
       .addField("Banned By", `${message.author.tag} with ID ${message.author.id}`)
       .addField("Banned In", message.channel)
       .addField("Time", message.createdAt)
       .addField("Reason", reason);
       let incidentchannel = message.guild.channels.find(`name`, "incidents");
       if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
        User.send(`You Are Has Been Banned in MarsMC Network `)
       User.sendMessage({embed: banEmbed}).then(() => message.guild.member(User).ban({reason: Reason}))
       .then(() => message.channel.send(`**# Done! I banned: ${User}**`)).then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, mmss(time));
    });
   }
});



client.on("message", message => {
    if (message.author.bot) return;
    let muteRole = message.guild.roles.find("name", "Muted");
    let command = message.content.split(" ")[0];

    if (command === prefix + "unmute") {
      let Warned = message.mentions.users.first();
        if(!Warned) return message.channel.send("Usage: %unmute [User].");
      if(!message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('**You don’t have `MANAGE_ROLES_OR_PERMISSIONS` permissions**');
    let modlog = client.channels.find('name', 'incidents');


    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** The Bot dont have the Manage Roles permissions **').catch(console.error);

    if (message.guild.member(Warned).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Done Unmuted ! **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Done Unmuted ! **").catch(console.error);

  let mutedEmbed = new Discord.RichEmbed()
.setDescription("» New UnMute User «")
.setColor("#bc0000")
.addField("Unmuted", `${Warned} with ID ${Warned.id}`)
.addField("Unmuted By", `<@${message.member.id}> with ID ${message.member.id}`)
.addField("In Channel", message.channel)
let incidentchannel = message.guild.channels.find(`name`, "incidents");
if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
  });
    }

  };

  });


var anti_spam = require("discord-anti-spam");
 
antispam(bot, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 10, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast.
  banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});
 


client.login(process.env.BOT_TOKEN);
