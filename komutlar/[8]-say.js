const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => { 
//MEDY APLAMDAN ALDIM İSTEDĞİNİ DESİN

  let botcommands = ""
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanabilmen için <@&${botcommands}> rolüne sahip olman gerekiyor.`).setColor("BLACK")).then(x => x.delete({ timeout: 6500 }));
  
  let tag1 = "";
  const tag = message.guild.members.cache.filter(m => m.user.username.includes(tag1)).size
  const etiketliaslanm =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "").size;
  const toptag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag1) || member.user.discriminator == "").size;
  const agalaraktif = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
  const swtop = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const passlanpass = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter('Passenger')
  message.react('847655163660730369') // Onay veya tag emoji ID
  message.channel.send(passlanpass.setDescription(`
  \`>\` Sunucumuzda toplam **${swtop}** kişi bulunmakta. (**${agalaraktif}**) Aktif!
  \`>\` Tagımızda toplam **${tag}** kişi bulunmakta.
  \`>\` Etiketimizde toplam **${etiketliaslanm}** kişi bulunmakta.
  \`>\` Tagımızda ve etiketimizde toplam **${toptag}** kişi bulunmakta.
  \`>\` Ses kanallarımızda **${ses}** üye bulunmakta.`));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

exports.help = {  
name: "say"
}