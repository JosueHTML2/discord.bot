const { readdirSync } = require('fs')
const { Client } = require('discord.js');

const { token } = require('../../config.json');

class Bot extends Client {
   constructor(options) {
      super(options)
      this.commands = [];
   }

   async registryCommands() {
      await this.login(token);
      this.guilds.cache.get('947254393147887707').commands.set(this.commands);
   }

   loadCommands(path = __dirname.replace('\\structures', '\\commands')) {
      readdirSync(path).forEach((dir) => {
         const commands = readdirSync(`${path}\\${dir}`);

         for (const command of commands) {
            const commandClass = require(`${path}/${dir}/${command}`);
            const cmd = new (commandClass)(this);

            this.commands.push(cmd);
         }
      });

   }
   loadEvents(path = __dirname.replace('\\structures', '\\events')) {
      const categories = readdirSync(path);

      categories.forEach((file) => {
         const eventClass = new (require(`../events/${file}`))(this);
         if (eventClass.name === 'ready') return this.on('ready', (a) => eventClass.run(a));
         else return this.on(eventClass.name, (...a) => eventClass.run(...a));
      });
   }
}

module.exports.Bot = Bot;