const logger = require(`./logger`);

const config = {
  isDev: process.env.NODE_ENV !== `production`
};

logger.log(config);

module.exports = config;
