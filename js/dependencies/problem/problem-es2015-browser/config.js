import logger from './logger.js';

const env = typeof process === `undefined` ? window : process.env;

const config = {
  appName: `Demo APP`,
  isDev: env.NODE_ENV !== `production`
};

logger.debug(config);

export default config;
