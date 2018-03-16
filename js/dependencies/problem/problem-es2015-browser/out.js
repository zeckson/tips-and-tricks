(function () {
'use strict';

const logger = {
  debug(message) {
    if (config.isDev) {
      console.log(message);
    }
  }
};

const env = typeof process === `undefined` ? window : process.env;

const config = {
  appName: `Demo APP`,
  isDev: env.NODE_ENV !== `production`
};

logger.debug(config);

logger.debug(`The application "${config.appName}" is up and running!`);

}());
//# sourceMappingURL=out.js.map
