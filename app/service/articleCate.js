const Service = require('egg').Service;

class ArticleCateService extends Service {
    async select(params) {
      const { mongoose } = this.app;
      let result = {};
      console.log(params);
      // var nid = params.nid == ''? null:mongoose.Types.ObjectId(params.nid);    
      // console.log(objid);
      let _filter = {
        $or:[
          // {_id:nid},
          {name:{$regex:params.searchVal || ''}}
        ]
      };
      let datas = await this.ctx.model.ArticleCate.find(_filter)
      .skip((params.page-1) * params.limit)
      .limit(params.limit)
      .sort({'_id':-1});

      let counts = await this.ctx.model.ArticleCate.find(_filter);

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
          errmsg:'类名不能为空!'
        }
      }
      let result = {};
      params = Object.assign({},{createTime:this.ctx.helper.formatTime(new Date())},params);
      let datas = await this.ctx.model.ArticleCate.create(params);
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
        let datas = await this.ctx.model.ArticleCate.update({_id:cateId},params);
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
        let datas = await this.ctx.model.ArticleCate.remove(params);
        result={
          code:20000,
          data:[],
          errmsg:'success'
        };
  
        return result;
      }

  }

  module.exports = ArticleCateService;