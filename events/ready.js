const { Events, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const colors = require("colors/safe");

const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(c) {
        console.log(colors.blue('[INFO]') + " " + colors.red(`Log In on ${c.user.username} !`));

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('valider')
                    .setLabel('Passer le captcha')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('<:axolotlshock:1009303616458346607>')
            )

        db.get("captcha_message").then(async function(result) {
            if (result == null) {
                c.guilds.cache.get("840770323988873227").channels.cache.get("950497512769323008").send({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Blue')
                            .setTitle('Captcha')
                            .setThumbnail('https://cdn.discordapp.com/emojis/850299802762608640.webp?size=96&quality=lossless')
                            .setDescription('Pour passer le captcha, il vous suffit d\'appuyer sur le boutton "**Passer le captcha**", cela vous permettra d\'avoir accès au serveur complet !')
                    ],
                    components: [
                        row
                    ]
                }).then(async msg => {
                    await db.set("captcha_message", msg.id);

                    const collector = msg.channel.createMessageComponentCollector();

                    collector.on('collect', async i => {
                        if (i.customId == "valider") {
                            const thisrole = c.guilds.cache.get("840770323988873227").roles.cache.get("950497502170349659");

                            if (i.member.roles.cache.some(role => role.id == thisrole.id)) {
                                i.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setColor('Red')
                                            .setDescription(':x: Vous avez déjà passé le captcha !')
                                    ],
                                    ephemeral: true
                                });
                            } else {
                                i.member.roles.add(thisrole.id);

                                i.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setColor('Green')
                                            .setDescription('<:Amis:1069763997009727528> Vous avez passé le captcha !')
                                    ],
                                    ephemeral: true
                                });
                            };
                        };
                    });
                });
            } else {
                try {
                    c.channels.cache.get("950497512769323008").messages.fetch(result).then(async message => {
                        message.delete().catch(error => {
                            console.log(colors.red('[ERROR]') + " " + "Une erreur est survenue lors de la supression du message avec comme identifiant" + " " + colors.magenta(result) + " !");
                        });
    
                        await db.delete("captcha_message");
                    });
                } catch(error) {
                    console.log(colors.red(error));
                };

                c.guilds.cache.get("840770323988873227").channels.cache.get("950497512769323008").send({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Blue')
                            .setTitle('Captcha')
                            .setThumbnail('https://cdn.discordapp.com/emojis/850299802762608640.webp?size=96&quality=lossless')
                            .setDescription('Pour passer le captcha, il vous suffit d\'appuyer sur le boutton "**Passer le captcha**", cela vous permettra d\'avoir accès au serveur complet !')
                    ],
                    components: [
                        row
                    ]
                }).then(async msg => {
                    await db.set("captcha_message", msg.id);

                    const collector = msg.channel.createMessageComponentCollector();

                    collector.on('collect', async i => {
                        if (i.customId == "valider") {
                            const thisrole = c.guilds.cache.get("840770323988873227").roles.cache.get("950497502170349659");

                            if (i.member.roles.cache.some(role => role.id == thisrole.id)) {
                                i.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setColor('Red')
                                            .setDescription(':x: Vous avez déjà passé le captcha !')
                                    ],
                                    ephemeral: true
                                });
                            } else {
                                i.member.roles.add(thisrole.id);

                                i.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setColor('Green')
                                            .setDescription('<:Amis:1069763997009727528> Vous avez passé le captcha !')
                                    ],
                                    ephemeral: true
                                });
                            };
                        };
                    });
                });
            }
        });
    },
};
