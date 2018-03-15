define([`./config`], (config) => {
  const logger = {
    log(message) {
      if (config.isDev) {
        console.log(message);
      } else {
        console.error(message);
      }
    }
  };

  return logger;
});