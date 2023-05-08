const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modal')
		.setDescription('Start a modal'),
	async execute(client, interaction) {
        const modal = new ModalBuilder()
            .setCustomId('testModal')
            .setTitle('Type a title here !');

        const something = new TextInputBuilder()
            .setCustomId('title')
            .setLabel("What is the title ?")
            .setStyle(TextInputStyle.Short);

        const ActionRow = new ActionRowBuilder().addComponents(something);

        modal.addComponents(ActionRow);

        await interaction.showModal(modal);
	},
};
