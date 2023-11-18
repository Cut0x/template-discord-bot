const { BotEvent } = require('simple-djs-handler');
const { Events } = require('discord.js');

module.exports = new BotEvent({
    name: Events.ClientReady,
    once: true,
    execute(client) {        
        client.user.setActivity('i\'m online !')
    },
});