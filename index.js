const Telegram = require('telegram-node-bot');

const tg = new Telegram.Telegram(process.env.BOT_TOKEN, {
    webAdmin: {
        port: 3000,
        host: "localhost"
    }
});
const TextCommand = Telegram.TextCommand;

const QuotesController = require("./QuotesController");

tg.router
    .when(
    new TextCommand('/quote', 'quoteCommand'),
    new QuotesController()
    );
