const config = require('./config');

const logger = {
  log(message) {
    if (config.isDev) {
      console.log(message);
    } else {
      console.error(message);
    }
  }
};

module.exports = logger;