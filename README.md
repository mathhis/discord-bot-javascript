# Discord Bot JavaScript
**This repository has been archived and will no longer be maintained.**

You can use as a template for your bots, you are free to modify it in your own way. The [discord.js](https://discord.js.org/#/) module and the [Sheweny](https://sheweny.js.org/) framework was used to create this small project.</br>

## Changelog
- [View all changes](https://github.com/mathhis/discord-bot-javascript/tree/main/changelog)

## Create

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/) (you can use another code editor if you want, this is for people who don't have one)
- [Node.js](https://nodejs.org/en/) (18.14.0+)

### Run
- Clone this repository
- Install the dependencies: `npm install`
- Change the name of the [`.env.example`](https://github.com/mathhis/discord-bot-javascript/blob/main/.env.example) file to [`.env`](https://github.com/mathhis/discord-bot-javascript/blob/main/.env.example)
   - Fill in the required information inside (*this will be explained in the notes of the file*)
- Start the bot: `npm start`

Now everything should run smoothly! 🎉

### Automatic deployment on a platform
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/S1-JVs?referralCode=mathis)

## Structures

### Command
```js
const { Command } = require("sheweny");

module.exports = class ExampleCommand extends Command {
  constructor(client) {
    super(client, {
      name: "example",
      type: "SLASH_COMMAND",
      description: "Example command",
    });
  }
  execute(interaction) {
    interaction.reply({ content: "This is an example of a Slash command. Learn more about building a command with Sheweny: https://sheweny.js.org/doc/structures/Command.html", ephemeral: true });
  }
};
```

### Event
```js
const { Event } = require("sheweny");

module.exports = class Ready extends Event {
  constructor(client) {
    super(client, "ready", {
      description: "Log in the console when the bot is successfully connected",
      once: true,
    });
  }

  execute(client) {
    console.log("Connected as " + client.user.tag + "");
  }
};
```

### References
- [discord.js Guide](https://discordjs.guide/)
- [Sheweny Guide](https://sheweny.js.org/guide/)
