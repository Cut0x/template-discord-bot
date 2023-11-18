const { BotCommand } = require('simple-djs-handler');

module.exports = new BotCommand({
    name: 'ping',
    description: '\ud83c\udfd3 The bot responds with pong!',
    execute: async (interaction) => {
        interaction.reply({
            content: ":ping_pong: Pong !"
        })
    },
});
