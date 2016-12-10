const Telegram = require('telegram-node-bot');

const QuotesController = require("./QuotesController");
const SavitriQuotesController = require("./SavitriQuotesController");
const CatchAllController = require("./CatchAllController");

const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(process.env.BOT_TOKEN, {
    webAdmin: {
        port: 3000,
        host: "localhost"
    }
});

tg.router
    .when(
    new TextCommand('/quote', 'quoteCommand'),
    new QuotesController()
    )
    .when(
    new TextCommand('/savitri', 'quoteCommand'),
    new SavitriQuotesController()
    )
    .otherwise(
    new CatchAllController()
    );
