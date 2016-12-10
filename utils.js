const author = {
    sa: "Sri Aurobindo",
    m: "The Mother"
};

const utils = {
    getURL: function (api) {

        const url = `${process.env.API_ENDPOINT}/${api}.json`;
        return url;
    },
    formatQuote: function (sel, auth, title, ref) {

        const quote = `${sel}\n\n—${author[auth]}, [${title}](${ref})`;
        return quote;
    }
}

module.exports = utils;
