const Service = require('egg').Service;
// const sd = require('silly-datetime');

class SysMenuService extends Service {
    async selectSysMenu(params) {
      const { mongoose } = this.app;
      const _this = this;
      let result = {}; 
      
      let datas = await this.ctx.model.SysMenu.find().sort({'sort':0});
  
      console.log(datas)
      result={
        code:20000,
        data:datas,
        errmsg:'success'
      };
      return result;     
    };
    
    async addSysMenu(params){
      const { mongoose } = this.app;
      let result = {};
    //   params = Object.assign({},{createTime:this.ctx.helper.formatTime(new Date())},params);
      await this.ctx.model.SysMenu.create(params);
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };

      return result;
    }

    async remoteMenu(params){
      const { mongoose } = this.app;
      let result = {};
      if(params.id == ''){
        return {
          code:30000,
          errmsg:'类名id不能为空!'
        }
      }
    //   console.log(params)
      let datas = await this.ctx.model.SysMenu.remove({_id:params.id});
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };

      return result;
    }

    async updateSysMenu(params){
      const { mongoose } = this.app;
      let result = {};
    //   let id = params.id;
    //   delete params.id;
      let datas = await this.ctx.model.SysMenu.update({_id:params.id},params);
    //   console.log(params)
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };
      return result;
    }

    async changeStatus(params){
      const { mongoose } = this.app;
      let result = {};
      let _id = params._id;
      delete params._id;
      let datas = await this.ctx.model.Article.update({_id},params);
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };
      return result;
    }
    
  }

  module.exports = SysMenuService;