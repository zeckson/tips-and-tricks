import logger from './logger.mjs';

const config = {
  isDev: process.env.NODE_ENV !== `production`
};

logger.log(config);

export default config;
