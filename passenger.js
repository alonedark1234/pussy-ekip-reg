const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const settings = require('./managment/settings.json')
var prefix = ayarlar.prefix;

const log = message => {console.log(`${message}`);};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
if (err) console.error(err);
log(`Toplam ${files.length} Destekçi Ve Komut Yükleniyor...`);
files.forEach(f => {
let props = require(`./komutlar/${f}`);
log(`BOT | ${props.help.name} Komutu Yüklendi.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {client.aliases.set(alias, props.help.name);});});});

client.reload = command => {return new Promise((resolve, reject) => {try {delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.load = command => {return new Promise((resolve, reject) => {try {let cmd = require(`./komutlar/${command}`);
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.unload = command => { return new Promise((resolve, reject) => { try {delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});resolve();} catch (e) {reject(e);}});};

client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get(ayarlar.botVoiceChannelID);
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client.elevation = message => {
if (!message.guild) {return;}
let permlvl = 0;
if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
if (message.author.id === ayarlar.sahip) permlvl = 4; return permlvl;};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));});
client.on('error', e => {console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));});
client.login(ayarlar.token);




//-----------------------GİRENE-ROL-VERME----------------------\\     PASSENGER

client.on("guildMemberAdd", member => {
  member.roles.add(settings.kayıtsızrol); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
  member.roles.add(settings.kayıtsızrol)
  member.roles.add(settings.kayıtsızrol)
  member.setNickname(`▸ İsim | Yaş`)
  member.setNickname(`▸ İsim | Yaş`)
  member.setNickname(`▸ İsim | Yaş`)
});

//-----------------------GİRENE-ROL-VERME----------------------\\     PASSENGER


//--------------------------------KOMUTLAR-------------------------------\\

client.on("guildMemberAdd", member => {
  require("moment-duration-format")
    var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-999])/g)
    üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
    if(üs) {
      üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
        return {
          '0': ``,
          '1': ``,
          '2': ``,
          '3': ``,
          '4': ``,
          '5': ``,
          '6': ``,
          '7': ``,
          '8': ``,
          '9': ``}[d];})}



          var voicecount = member.guild.members.cache.filter(s => s.voice.channel).size.toString().replace(/ /g, "    ")
          var voice = voicecount.match(/([0-9])/g)
          voicecount = voicecount.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
          if(voice) {
              voicecount = voicecount.replace(/([0-9])/g, d => {
                return {
                  '0': ``,
                  '1': ``,
                  '2': ``,
                  '3': ``,
                  '4': ``,
                  '5': ``,
                  '6': ``,
                  '7': ``,
                  '8': ``,
                  '9': ``}[d]
                })
              }

  const kanal = member.guild.channels.cache.find(r => r.id === "");//REGİSTER KANAL İD
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
   const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
 var kontrol;
if (kurulus < 1296000000) kontrol = 'Bu Kullanıcı Güvenilir Gözükmüyor.'//MESAJI SİLİP GÜVENSİZ EMOJİSİ KOYABİLİRSİNİZ
if (kurulus > 1296000000) kontrol = 'Bu Kullanıcının Hesabı Güvenli.'//MESAJI SİLİP GÜVENLİ EMOJİSİ EKLİYEBİLRSİNİZ
  moment.locale("tr");
  kanal.send(`
Sunucu'ya hoş geldin <@`+ member + `> - \``+ member.id + `\`

Hesabını **\``+ gecen +`\`** önce oluşturmuşsun `+ kontrol +` | <@&Kayıtçı_Rol_İD>
      
Sunucu kurallarımız <#Kurallar_Kanal_İD> kanalında belirtilmiştir. Unutma sunucu içerisinde ki cezalar <#Cezai_işlem_kanal_id>'i okuduğunu varsayarak gerçekleştirilecek.
      
Seninle beraber sunucumuz toplam **`+üyesayısı+ `** kişi oldu! ve Sunucumuzun Anlık Ses Aktifliği `+voicecount+` Olarak Görüntülenmektedir! Sol tarafta bulunan **V.Confirmed** odalarından birine girerek kayıt işlemini gerçekleştirebilirsin. 
      
Tagımıza ulaşmak için herhangi bir kanala \`.tag\` yazman yeterlidir. Şimdiden iyi eğlenceler! :tada: :tada:`)});

//------------------------------------------------------------------------------------------------------------\\
  
//-----------------------TAG-ROL-LOG----------------------\\  
client.on("userUpdate", async function(eskiii, yeniii) {
  const guildID = "sunucu_id"
  const roleID = "taglı_id"//taglı_rol
  const tag = "tagınız"
  const log2 = 'log_kanal'

  const guildd22 = client.guilds.cache.get(guildID)
  const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guildd22.members.cache.get(yeniii.id)
  const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('BLUE').setTimestamp().setFooter('PassengerXD?');
  if (yeniii.username !== eskiii.username) {
      if (eskiii.username.includes(tag) && !yeniii.username.includes(tag)) {
          member.roles.remove(roleID)
          member.roles.set([""])//unregister rol id
          client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} isminden tagımızı çıkartarak ailemizden ayrıldı`))
      } else if (!eskiii.username.includes(tag) && yeniii.username.includes(tag)) {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(` ${yeniii} ismine tagımızı alarak ailemize katıldı`))
      }
  }

 if (yeniii.discriminator !== eskiii.discriminator) {
      if (eskiii.discriminator == "etiket_tag" && yeniii.discriminator !== "etiket_tag") {
          member.roles.remove(roleID)
          member.roles.set([""])//unregister rol id
          client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} etiketimizi çıkartarak ailemizden ayrıldı!`))
      } else if (eskiii.discriminator !== "etiket_tag" && yeniii.discriminator == "etiket_tag") {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} etiketimizi alarak ailemize katıldı`))
      }
  }

})
//-----------------------TAG-ROL-LOG-SON----------------------\\  


client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
  const kytsz = member.guild.roles.cache.get(settings.roller.kayıtsızrol) 
   var rol = member.guild.roles.cache.get(settings.roller.karantinarol) // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.roles.add(rol)
   member.roles.remove(kayıtsız)

member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

}, 1000)


   }
        else {

        }
    });



//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
  if(message.content.toLowerCase() == "tag") 
  return message.channel.send(``)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "!tag") 
  return message.channel.send(``)
});

client.on("message", message => {
  if(message.content.toLowerCase() == ".tag") 
  return message.channel.send(`Tagınız`)
});

//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
  if(message.content.toLowerCase() == "sa") 
  return message.channel.send(`${message.author}, Aleyküm selam hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "selamın aleyküm") 
  return message.channel.send(`${message.author}, Aleyküm selam hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "selam") 
  return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "merhaba") 
  return message.channel.send(`${message.author}, Merhaba hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "s.a") 
  return message.channel.send(`${message.author}, Aleyküm Selam hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "mrb") 
  return message.channel.send(`${message.author}, Aleyküm Selam hoşgeldin.`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "slm") 
  return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

//------------------------------------------------------------------------------------------------------------\\