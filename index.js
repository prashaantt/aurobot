const Telegram = require('telegram-node-bot');

const QuotesController = require("./QuotesController");
const SavitriQuotesController = require("./SavitriQuotesController");
const CatchAllController = require("./CatchAllController");
const WelcomeController = require("./WelcomeController");

const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(process.env.BOT_TOKEN, {
    webAdmin: {
        port: 3000,
        host: "localhost"
    }
});

tg.router
    .when(
    new TextCommand('/start', 'startCommand'),
    new WelcomeController()
    )
    .when(
    new TextCommand('/quote', 'quoteCommand'),
    new QuotesController()
    )
    .when(
    new TextCommand('/savitri', 'savitriQuoteCommand'),
    new SavitriQuotesController()
    )
    .otherwise(
    new CatchAllController()
    );
