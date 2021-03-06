/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589351539578_5705';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    
  };
  config.cluster = {
    "listen": {
      "path": "",
      "port": 7002,
      "hostname": ""
    }
};

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/blog',
      options: {
        
      }
    },
  };

  config.cors = {
      origin: '*', 
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.security = {
      csrf: {
          enable: false,
      }
  };
  
  config.jwt = {  //jwt配置项
    secret: "123456"
  }

  // config.multipart={
  //   fileExtensions: [ 'blob' ] // 增加对blob文件支持
  // }

  config.qiniu={
    AccessKey:'ByLHJMPzIxxBgvsv6qaCUYFwo-4t8b2SxE22UzZ3',
    SecretKey:'fOU99lxpcb4eT_7jHQsmPVHveWI9yVRLjl5oOh7Z',
    bucket:'zjmblog'
  }

  return {
    ...config,
    ...userConfig,
  };
};
