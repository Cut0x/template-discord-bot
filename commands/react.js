const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js'),
    colors = require("colors/safe");
const wait = require('node:timers/promises').setTimeout;
const client = require("../main");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Réagis avec l\'émoji ✅ !')
        .addChannelOption(option =>
            option
                .setName('channelid')
                .setDescription('Choisi un ID de salon')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('msgid')
                .setDescription('Choisi un ID de message')
                .setRequired(true)),
	async execute(interaction) {
        const channel = interaction.options.getChannel('channelid');
        const msg = interaction.options.getString('msgid');

        await interaction.deferReply();

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
            await wait(2000);

            return await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('Red')
                        .setDescription(`:x: Il vous faut la permission \`ManageMessages\` !`)
                ]
            });
        };

        try {
            interaction.channel.messages.fetch(msg).then(async message => {
                await wait(2000);
                
                await message.react('✅');

                await wait(2500);

                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Green')
                            .setDescription(`<:Amis:1069763997009727528> Réaction ajouté au message \`${msg}\` !`)
                    ]
                });
            });
        } catch(error) {
            await wait(2000);

            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('Red')
                        .setDescription(`<:Amis:1069763997009727528> Une erreur est survenue !`)
                        .addFields(
                            [
                                {
                                    name: "Erreur :",
                                    value: "```diff\n- " + error + "\n```"
                                }
                            ]
                        )
                ]
            });

            console.log(colors.red(error));
        };
	},
};