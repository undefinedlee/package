/* eslint strict:0 */
global.__DEV__ = true;

global.__BUNDLE_START_TIME__ = Date.now();


global.process = {
  env: {
    NODE_ENV: "dev"
  }
};
