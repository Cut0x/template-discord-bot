const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const client = require("../main");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Envoie la latence du bot !'),
	async execute(interaction) {
        const mesg = await interaction.deferReply({ content: ":ping_pong: Pong !", fetchReply: true });
		
        await wait(3000);
		
        await interaction.editReply({
            content: `:ping_pong: Pong !`,

            embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`<:new:1014255730762723480> Voici ma latence: \`${mesg.createdTimestamp - interaction.createdTimestamp} ms\``)
            ]
        });
	},
};