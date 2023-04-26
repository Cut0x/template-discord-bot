# Make a Discord bot simply !
This template allows you to start your bot with a complete infrastructure !

# Install modules
```
npm install
```
⚠️ The `better-sqlite3` module tends to install badly ! I therefore advise you, in case, once `npm install` is done, to do `npm install better-sqlit3`.
```
npm install better-sqlite3
```

# Where to configure the bot?
You have to go to the redirect `./data/config.js` (<a href="https://github.com/Cut0x/start-discord-bot/blob/main/data/config.js">Click here !</a>) to edit the build file as below:
```js
module.exports = {
    token: "token_of_your_app", // Token of your bot

    clientId: "id_of_your_app", // ID of your bot

    BotClose: false, // put true if you want only you can do the orders
    
    ownerBot: "your_id" // Your ID
};
```

# Are you having a problem ? the code does not work ?
Contact me by my private messages <a href="https://twitter.com/Cut0x_">Twitter</a> or <a href="https://instagram.com/valloic_">Instagram</a> with all the information (the complete error in READABLE image).
You can also contact me through the <a href="https://github.com/Cut0x/start-discord-bot/discussions/1">message category</a> of the project !
