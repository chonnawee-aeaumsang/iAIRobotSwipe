const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAHNnVHTGtkr-uk0ZmvS6Jp2MNBDNNgwgMI"; // Replace with your bot token
const webhookUrl = "https://i-ai-robot-swipes-game.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

