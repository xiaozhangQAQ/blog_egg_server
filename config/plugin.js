'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // enable: true,
  // package: 'egg-validate'
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  cors: {
      enable: true,
      package: "egg-cors"
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
