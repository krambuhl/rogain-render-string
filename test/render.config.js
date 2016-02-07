const RogainConfig = require('rogain-config');

var config = new RogainConfig();

config.components.register(require('./fixtures/templates.json'));
config.helpers.register(require('./helpers/helpers.js').helpers);

module.exports = config;