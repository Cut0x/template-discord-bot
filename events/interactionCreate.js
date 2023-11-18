const { BotEvent } = require('simple-djs-handler');
const { Events } = require('discord.js');

const { bot } = require("../data/config");

module.exports = new BotEvent({
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) {
            console.log(`No order match ${interaction.commandName} was found.`)
            return;
        };
    
        try {
            if (bot.maintenance === true && interaction !== bot.owner_bot) {
                interaction.reply({
                    content: ":x: Only the bot owner can use the bot."
                });
            } else {
                await command.execute(interaction);
            };
        } catch (error) {
            console.log(`Error when launching an command : ${error}`);
        };
    },
});
