const Service = require('egg').Service;
// const sd = require('silly-datetime');

class ArticleService extends Service {
    async select(params) {
      const { mongoose } = this.app;
      const _this = this;
      let result = {};
      // let datas = await this.ctx.model.Article.aggregate([
      //   {
      //     $lookup: {
      //       from: "article_cate",
      //       localField: "tid",
      //       foreignField: "_id",
      //       as: "category"
      //     }
      //   },  
      //   {
      //     $match:{
      //       "uid":mongoose.Types.ObjectId(params.uid)
      //     }
      //   }
      // ]);     
      let datas = await this.ctx.model.Article.find(params).populate([
        {path:'tid lid',select:'_id name'}
      ])

      let outArr = [];
      // console.log(datas)
      datas.forEach((item,index)=>{
        let objs ={
          article:item,
          category: item.tid,
          tags: item.lid
        }
        outArr.push(objs);
      })
      result={
        code:20000,
        data:{
          list: outArr
        },
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
      params = Object.assign({},{createTime:this.ctx.helper.formatTime(new Date())},params);
      let datas = await this.ctx.model.Article.create(params);
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
      if(params.id == ''){
        return {
          code:30000,
          errmsg:'类名id不能为空!'
        }
      }
      let datas = await this.ctx.model.Article.remove(params);
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
      let titleId = params.titleId;
      delete params.titleId;
      let datas = await this.ctx.model.Article.update({_id:titleId},params);
      result={
        code:20000,
        data:[],
        errmsg:'success'
      };
      return result;
    }
    
  }

  module.exports = ArticleService;