const Service = require('egg').Service;

class HomeService extends Service {
    async total(params) {
      const { mongoose } = this.app;
      let result = {};
      let datas = await this.ctx.model.Article.find({uid:params._id}).count();
      result={
        code:20000,
        data:{
          total:datas
        },
        errmsg:'success'
      };
      return result;     
    };


  }

  module.exports = HomeService;