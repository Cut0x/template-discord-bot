# Make a Discord bot simply !
This template allows you to start your bot with a complete infrastructure !

# Modules to install
```
npm install discord.js path colors fs quick.db better-sqlite3
```

# Where to configure the bot?
You have to go to the redirect `<a href="https://github.com/Cut0x/start-discord-bot/blob/main/data/config.js">./data/config.js</a>` to edit the build file as below:
```js
module.exports = {
    token: "token_of_your_app", // Token of your bot

    clientId: "id_of_your_app", // ID of your bot

    BotClose: false, // put true if you want only you can do the orders
    
    ownerBot: "your_id" // Your ID
};
```
