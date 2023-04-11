const { Events, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const colors = require("colors/safe");

const { BotClose } = require("../data/config");

const client = require("../main");

module.exports = {
	name: Events.GuildMemberRemove,
	once: false,
	async execute(member) {
        if (member.user.bot) {
            const channel = member.guild.channels.cache.find(channel => channel.id == "salon_id");

            if (channel) {
                channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('Membre en moins ! [`-1`]')
                            .setColor('Red')
                            .setDescription(`:robot: Le bot **${member.user.tag}** vient de quitter le serveur !`)
                            .setFooter({
                                text: `Nous sommes désormais ${member.guild.memberCount} membres.`
                            })
                            .setThumbnail(member.user.avatarURL({
                                format: "webp",
                                dynamic: true
                            }))
                    ]
                });
            };
        } else {
            const channel = member.guild.channels.cache.find(channel => channel.id == "salon_id");

            if (channel) {
                channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('Membre en moins ! [`-1`]')
                            .setColor('Red')
                            .setDescription(`:confused: L'utilisateur **${member.user.tag}** vient de quitter le serveur !`)
                            .setFooter({
                                text: `Nous sommes désormais ${member.guild.memberCount} membres.`
                            })
                            .setThumbnail(member.user.avatarURL({
                                format: "webp",
                                dynamic: true
                            }))
                    ]
                });
            };
        };
	},
};
