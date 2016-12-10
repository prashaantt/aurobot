const Telegram = require('telegram-node-bot');

class WelcomeController extends Telegram.TelegramBaseController {
    welcomeHandler($) {
        const mothersMessage = `
If one reads Sri Aurobindo carefully one finds the answers to all that one wants to know.\n\n—The Mother.`;

        const welcomeMessage = `
_Welcome to AuroBot! Please select one of the available commands to continue._`;

        $.sendMessage(mothersMessage, {
            parse_mode: "markdown"
        });

        setTimeout(function () {

            $.sendMessage(welcomeMessage, {
                parse_mode: "markdown"
            })
        }, 1000);
    }

    get routes() {

        return {
            startCommand: 'welcomeHandler'
        }
    }
}

module.exports = WelcomeController;
