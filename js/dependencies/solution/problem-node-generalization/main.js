const config = require(`./config`);
const logger = require(`./logger`);

logger.debug(config);

logger.debug(`The application "${config.appName}" is up and running!`);
