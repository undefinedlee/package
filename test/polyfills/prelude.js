/* eslint strict:0 */
global.__DEV__ = false;

global.__BUNDLE_START_TIME__ = Date.now();


global.process = {
  env: {
    NODE_ENV: 'production'
    // NODE_ENV: "dev"
  }
};
