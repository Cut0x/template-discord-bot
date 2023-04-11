const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const client = require("../main");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('social')
		.setDescription('Envoie les réseaux sociaux de Cut0x !'),
	async execute(interaction) {
        await interaction.deferReply();
		
        await wait(2000);

		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
                    .setEmoji('<:twitter:1070441940144902154>')
                    .setURL('https://twitter.com/Cut0x_'),
			)
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
                    .setEmoji('<:twitch:1070442115160612884>')
                    .setURL('https://www.twitch.tv/cut0x'),
			)
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
                    .setEmoji('<:github:1070441937842217161>')
                    .setURL('https://github.com/Cut0x'),
			)
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
                    .setEmoji('<:youtube:1070441941751308409>')
                    .setURL('https://www.youtube.com/channel/UCzYSf-VLGKlqmnT6_E3hAXw'),
			);
		
        await interaction.editReply({
            content: "> <https://cutox.alwaysdata.net/>",
            embeds: [
                new EmbedBuilder()
                    .setColor('Navy')
                    .setTitle('Réseaux sociaux de Cut0x !')
                    .setDescription('<:twitter:1070441940144902154> [Twitter](https://twitter.com/Cut0_)\n<:twitch:1070442115160612884> [Twitch](https://www.twitch.tv/cut0x)\n<:github:1070441937842217161> [Github](https://github.com/Cut0x)\n<:youtube:1070441941751308409> [YouTube](https://www.youtube.com/channel/UCzYSf-VLGKlqmnT6_E3hAXw)')
            ],
            components: [
                row
            ]
        });
	},
};