var helpers = {
  Range: require('./Range'),
  Repeat: require('./Repeat'),
  Pass: require('./Pass'),
  Fail: require('./Fail'),
  Empty: require('./Empty'),
  NonEmpty: require('./NonEmpty')
};

function register(config) {
  config.helpers.register(helpers);
}

module.exports = {
  helpers: helpers,
  register: register 
};