const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "*";

Client.on("ready", () => {
    console.log("il marche tkt"); 

});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "842693747937771522").send(`Bienvenue sur Arès ${member} viens t'amuser ici bg!\nNous sommes grace a toi **` + member.guild.memberCount + `** sur le server !`);
     
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitter le server");
    member.guild.channels.cache.find(channel => channel.id === "842693747937771522").send(member.displayName + " Azy bouge de la");
})

Client.on("message", message =>{
    if(message.author.bot) return; 
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention  = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succès");
                }
                else{
                    message.reply("Imposible de bannir ce membre.")
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + "a été kick avec succès.");
                }
                else {
                    message.reply("Imposible de kick ce membre.")
                }
            }
        }      
    }
});


Client.login("ODQyNDMzMTgzNDMyODM1MTMy.YJ1PCg.hWQp694o_ZmKdaYaXHQyMfe85Ys")