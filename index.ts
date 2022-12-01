import { Client, GatewayIntentBits } from 'npm:discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(ENV.TOKEN);