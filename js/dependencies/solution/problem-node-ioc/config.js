const logger = require(`./logger`);

class AppCofigurer {
  constructor(logger, config) {

  }

  configure() {
    return {
      isDev: process.env.NODE_ENV !== `production`
    }
  }

  print() {

  }

}


module.exports = AppCofigurer;
