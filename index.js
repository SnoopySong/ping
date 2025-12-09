const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Récupération du token depuis les variables d'environnement
const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Bot nul connecté en tant que ${client.user.tag}`);
});

// Répond "pong" quand quelqu'un dit "!ping"
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("pong... même pas motivé 😒");
  }
});

client.login(TOKEN);
