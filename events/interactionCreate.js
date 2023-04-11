const { Events, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const colors = require("colors/safe");

const { BotClose } = require("../data/config");

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) {
            console.error(`Aucune correspondance de commande ${interaction.commandName} a été trouvé.`);
            return;
        }
    
        try {
            if (BotClose == true && interaction.user.id !== "your_identifiant") {
                await interaction.deferReply({ ephemeral: true });
                await wait(2000);

                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Red')
                            .setDescription(':x: Bot en développement, seul le développeur peut utiliser le bot !')
                    ],
                    ephemeral: true
                })
            } else {
                await command.execute(interaction);
            };
        } catch (error) {
            console.log(colors.magenta('[ERROR]') + "\n" + colors.red(error));

            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('Red')
                        .setDescription(`:x: Une erreur c'est produite en lancant la commande \`${interaction.commandName}\` !`)
                        .addFields([
                            {
                                name: "> Erreur :",
                                value: "```diff\n- " + error + "```"
                            }
                        ])
                        .setFooter({
                            text: "Voir console pour plus d'info !"
                        })
                ],
                ephemeral: true
            });
        }
	},
};
