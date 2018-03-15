// Файл config.js
const config = {
  isDev: process.env.NODE_ENV !== `production`,
  print(logger) {
    logger.log(config);
  }
};

module.exports = config;
