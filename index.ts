import { createBot, Intents, startBot } from "https://deno.land/x/discordeno@13.0.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();

const bot = createBot({
  token: ENV.TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready() {
      console.log("Successfully connected to gateway");
    },
  },
});

// Another way to do events
bot.events.messageCreate = function (b, message) {
  // Process the message here with your command handler.
};

await startBot(bot);