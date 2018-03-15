// Файл logger.js

const logger = {
  log(message) {
    if (this.config.isDev) {
      console.log(message);
    } else {
      console.error(message);
    }
  },
  init(config) {
    this.config = config;
  }
};

module.exports = logger;