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