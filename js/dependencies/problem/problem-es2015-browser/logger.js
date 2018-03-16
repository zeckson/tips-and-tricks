import config from './config.js';

const logger = {
  debug(message) {
    if (config.isDev) {
      console.log(message);
    }
  }
};

export default logger;