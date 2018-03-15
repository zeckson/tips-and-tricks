// Файл main.js

const logger = require(`./logger`);
const config = require(`./config`);

logger.init(config);
config.print(logger);
