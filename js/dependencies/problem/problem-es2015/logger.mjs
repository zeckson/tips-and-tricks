import config from './config.mjs';

const logger = {
  log(message) {
    if (config.isDev) {
      console.log(message);
    } else {
      console.error(message);
    }
  }
};

export default logger;