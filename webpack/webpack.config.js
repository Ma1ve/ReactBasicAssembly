const { merge } = require('webpack-merge');
const commonComfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonComfig, envConfig);
  return config;
};
