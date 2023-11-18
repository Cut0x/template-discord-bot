const { BotCommand } = require('simple-djs-handler');

module.exports = new BotCommand({
    name: 'say',
    description: '\ud83e\ude81 Make the bot talk!',
    options: [
        {
            name: "content",
            description: "Write the message to send",
            type: 'STRING',
            required: true
        }
    ],
    execute: async (interaction) => {
        const content = interaction.options.getString('content');

        interaction.reply({
            content: ":white_check_mark: Message sent.",
            ephemeral: true
        })
        
        interaction.channel.send({
            content: `${content}`
        }).catch(error => {
            console.error(`An error has occurred : ${error}`);
        });
    },
});
