const { Interaction, BaseCommandInteraction, MessageEmbed } = require("discord.js");

module.exports = class {
   constructor(client) {
      this.client = client;
      this.name = 'ping';
      this.description = 'Ping do bot'
   }
   /**
    * 
    * @param {BaseCommandInteraction} interaction 
    */
   run(interaction) {
      const embed = new MessageEmbed()
         .setColor(0x3498DB)
         .setAuthor({ name: "Author Name, it can hold 256 characters", iconURL: "https://i.imgur.com/lm8s41J.png" })
         .setTitle("This is your title, it can hold 256 characters")
         .setURL("https://discord.js.org/#/docs/main/stable/class/MessageEmbed")
         .setDescription("This is the main body of text, it can hold 4096 characters.")
         .setImage("http://i.imgur.com/yVpymuV.png")
         .setThumbnail("http://i.imgur.com/p2qNFag.png")
         .addField("This is a single field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
         .addFields(
            { name: "Inline fields", value: "They can have different fields with small headlines, and you can inline them.", inline: true },
            { name: "Masked links", value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.", inline: true },
            { name: "Markdown", value: "You can put all the *usual* **__Markdown__** inside of them.", inline: true }
         )
         .addField("\u200b", "\u200b")
         .setTimestamp()
         .setFooter({text: "This is the footer text, it can hold 2048 characters", iconURL: "http://i.imgur.com/w1vhFSR.png"});

      interaction.reply({ embeds: [embed], ephemeral: true });
   }
}