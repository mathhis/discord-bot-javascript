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