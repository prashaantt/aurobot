const Telegram = require('telegram-node-bot');

class CatchAllController extends Telegram.TelegramBaseController {
    handle($) {
        const unsupportedMessage = "_Unsupported command. Try something else..._";
        $.sendMessage(unsupportedMessage, {
            parse_mode: "markdown"
        });
    }
}

module.exports = CatchAllController;
