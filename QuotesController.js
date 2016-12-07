const Telegram = require('telegram-node-bot');
const axios = require("axios");

const utils = require("./utils");

const author = {
    sa: "Sri Aurobindo",
    m: "The Mother"
};

class QuotesController extends Telegram.TelegramBaseController {
    constructor() {

        super();

        axios.get(utils.getURL("quotes"))
            .then(function(response) {
                this.quotes = response.data.quotes;
            }.bind(this));
    }

    quotesHandler($) {

        const quotesLength = this.quotes.length;
        const randomBookIndex = Math.floor(quotesLength * Math.random());
        const randomBook = this.quotes[randomBookIndex];
        const selectionsLength = randomBook.list.length;
        const randomQuoteIndex = Math.floor(selectionsLength * Math.random());
        const randomQuote = randomBook.list[randomQuoteIndex];
        const quote = `
${randomQuote.sel}\n
—${author[randomQuote.auth]}, [${randomBook.t}](${randomQuote.ref})
`;
        $.sendMessage(quote, {
            parse_mode: "markdown"
        });
    }

    get routes() {

        return {
            'quoteCommand': 'quotesHandler'
        }
    }
}

module.exports = QuotesController;
