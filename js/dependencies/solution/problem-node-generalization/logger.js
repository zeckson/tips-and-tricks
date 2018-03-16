const config = require(`./config`);

const logger = {
  debug(message) {
    if (config.isDev) {
      console.log(message);
    }
  }
};

module.exports = logger;