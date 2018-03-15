import logger from './logger.js';

const config = {
  isDev: window.NODE_ENV !== `production`
};

logger.log(config);

export default config;
