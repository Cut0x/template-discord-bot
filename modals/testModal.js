const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "testModal",
    run: async (client, interaction) => {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(interaction.fields.getTextInputValue('something'))
            ],
            ephemeral: true
        });
    },
};
