define([`./logger`], (logger) => {
  const config = {
    isDev: process.env.NODE_ENV !== `production`
  };

  logger.log(config);

  return config;
});
