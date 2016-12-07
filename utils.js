const utils = {
    getURL: function (api) {

        return `${process.env.API_ENDPOINT}/${api}.json`;
    }
}

module.exports = utils;
