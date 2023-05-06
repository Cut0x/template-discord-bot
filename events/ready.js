const { Events, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const colors = require("colors/safe");

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(c) {
        console.log(colors.blue('[INFO]') + " " + colors.red(`Log In on ${c.user.username} !`));
    },
};
