// Файл config.js
const env = typeof process === `undefined` ? window : process.env;

const config = {
  appName: `Demo APP`,
  isDev: env.NODE_ENV !== `production`,
  print(logger) {
    logger.log(config);
  }
};

module.exports = config;
