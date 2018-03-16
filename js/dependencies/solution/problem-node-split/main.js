// Файл main.js

const logger = require(`./logger`);
const config = require(`./config`);

logger.init(config);
config.print(logger);

logger.debug(`The application "${config.appName}" is up and running!`);
