const Service = require('egg').Service;

class ArticleLabelService extends Service {
    async select(params) {
      const { mongoose } = this.app;
      let result = {};
      let datas = await this.ctx.model.ArticleLabel.find();
    //   console.log(params)
      result={
        code:20000,
        data:datas,
        errmsg:'success'
      };
      return result;     
    };
    
    async add(params){
      const { mongoose } = this.app;
      let result = {};
      if(params.title == ''){
        return {
          code:30000,
          errmsg:'标题不能为空!'
        }
      }
    //   console.log(this.ctx.helper.formatTime(new Date()))
      params = Object.assign({},{status:'1',createTime:this.ctx.helper.formatTime(new Date())},params);
      let datas = await this.ctx.model.Article.create(params);
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };

      return result;
    }
  }

  module.exports = ArticleLabelService;