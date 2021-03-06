const logger = require(`./logger`);

const env = typeof process === `undefined` ? window : process.env;

const config = {
  appName: `Demo APP`,
  isDev: env.NODE_ENV !== `production`
};

logger.debug(config);

module.exports = config;
