const { ShewenyClient } = require("sheweny");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const client = new ShewenyClient({
    intents: ["32767"],
    admins: [""], // ID of your Discord account
    managers: {
      commands: {
        directory: "./commands",
        loadAll: true,
        autoRegisterApplicationCommands: true,
      },
      events: {
        directory: "./events",
        loadAll: true,
      },
    },
    mode: "production",
  });

client.login(TOKEN);