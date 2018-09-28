const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
const moment = require('moment');
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "ban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
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

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('+bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "MarsMC";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })

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
.addField('     **+setDate** ' ,' **Create Channel To Show The Date**')
.addField('     **+setTime** ' ,' **Create Channel For The Time**')
.addField('     **+setCount** ' ,' **Create Channel For The Members Counter **')
.addField('     **+setVoice** ' ,' **Create Channel For The Voice Online Counter **')
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});






client.on("message", message => {
    if (message.author.bot) return;
    let muteRole = message.guild.roles.find("name", "Muted");
    let command = message.content.split(" ")[0];

    if (command === prefix + "unmute") {
      let Warned = message.mentions.users.first();
        if(!Warned) return message.channel.send("Usage: +unmute [User].");
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





client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`🎤 - Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`🎤 - Voice Online : 「${message.guild.members.filter(m => m.voiceChannel).size}」`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`👪 - Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`👪 - Members Count : 「${message.guild.memberCount}」`)
      },1000);
    });
    }
  });

    
   
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time : 「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });

  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date : " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });

client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setDays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });
    }
  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  /*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
  رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
  سو روم بأسم log 
  أو غيره من الكود عشان يرسل هنا التحذير
  nvm i 10 
  nvm use 10
  npm i discord.js
  */
  var guilds = {};
  client.on('guildBanAdd', function(guild) {
              const rebellog = client.channels.find("name", "th-log"),
              Onumber = 3,
    Otime = 10000
  guild.fetchAuditLogs({
      type: 22
  }).then(audit => {
      let banner = audit.entries.map(banner => banner.executor.id)
      let bans = guilds[guild.id + banner].bans || 0 
      guilds[guild.id + banner] = {
          bans: 0
      }
        bans[guilds.id].bans += 1; 
  if(guilds[guild.id + banner].bans >= Onumber) {
  try {
  let roles = guild.members.get(banner).roles.array();
  guild.members.get(banner).removeRoles(roles);
    guild.guild.member(banner).kick();
  
  } catch (error) {
  console.log(error)
  try {
  guild.members.get(banner).ban();
    rebellog.send(`<@!${banner.id}>
  حآول العبث بالسيرفر @everyone`);
  guild.owner.send(`<@!${banner.id}>
  حآول العبث بالسيرفر ${guild.name}`)
      setTimeout(() => {
   guilds[guild.id].bans = 0;
    },Otime)
  } catch (error) {
  console.log(error)
  }
  }
  }
  })
  });
   let channelc = {};
    client.on('channelCreate', async (channel) => {
    const rebellog = client.channels.find("name", "th-log"),
    Oguild = channel.guild,
    Onumber = 3,
    Otime = 10000;
    const audit = await channel.guild.fetchAuditLogs({limit: 1});
    const channelcreate = audit.entries.first().executor;
    console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
     if(!channelc[channelcreate.id]) {
      channelc[channelcreate.id] = {
      created : 0
       }
   }
   channelc[channelcreate.id].created += 1;
   if(channelc[channelcreate.id].created >= Onumber ) {
      Oguild.members.get(channelcreate.id).kick();
  rebellog.send(`<@!${channelcreate.id}>
  حآول العبث بالسيرفر @everyone`);
  channel.guild.owner.send(`<@!${channelcreate.id}>
  حآول العبث بالسيرفر ${channel.guild.name}`)
  }
    setTimeout(() => {
   channelc[channelcreate.id].created = 0;
    },Otime)
    });
  
  let channelr = {};
    client.on('channelDelete', async (channel) => {
    const rebellog = client.channels.find("name", "th-log"),
    Oguild = channel.guild,
    Onumber = 3,
    Otime = 10000;
    const audit = await channel.guild.fetchAuditLogs({limit: 1});
    const channelremover = audit.entries.first().executor;
    console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
     if(!channelr[channelremover.id]) {
      channelr[channelremover.id] = {
      deleted : 0
       }
   }
   channelr[channelremover.id].deleted += 1;
   if(channelr[channelremover.id].deleted >= Onumber ) {
    Oguild.guild.member(channelremover).kick();
  rebellog.send(`<@!${channelremover.id}>
  حآول العبث بالسيرفر @everyone`);
  channel.guild.owner.send(`<@!${channelremover.id}>
  حآول العبث بالسيرفر ${channel.guild.name}`)
  }
    setTimeout(() => {
   channelr[channelremover.id].deleted = 0;
    },Otime)
    });
  

client.login(process.env.BOT_TOKEN);
