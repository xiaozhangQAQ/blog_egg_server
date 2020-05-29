const Service = require('egg').Service;

class ArticleLabelService extends Service {
    async select(params) {
      const { mongoose } = this.app;
      let result = {};
      console.log(params)
      let datas = await this.ctx.model.ArticleLabel.find({
        $or:[
          {name:{$regex:params.searchVal || ''}}
        ]
      });
      console.log(datas)
      result={
        code:20000,
        data:datas,
        errmsg:'success'
      };
      return result;     
    };
    
    async add(params){
      const { mongoose } = this.app;
  
      if(params.name == ''){
        return {
          code:30000,
          errmsg:'标题不能为空!'
        }
      }
      let result = {};
      params = Object.assign({},{createTime:this.ctx.helper.formatTime(new Date())},params);
      let datas = await this.ctx.model.ArticleLabel.create(params);
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };

      return result;
    }

    async update(params){
        const { mongoose } = this.app;
        let result = {};
        let cateId = params._id;
        delete params._id;
        let datas = await this.ctx.model.ArticleLabel.update({_id:cateId},params);
        result={
          code:20000,
          data:[],
          errmsg:'success'
        };
        return result;
      }

      async delete(params){
        const { mongoose } = this.app;
        let result = {};
        let datas = await this.ctx.model.ArticleLabel.remove(params);
        result={
          code:20000,
          data:[],
          errmsg:'success'
        };
  
        return result;
      }
  }

  module.exports = ArticleLabelService;