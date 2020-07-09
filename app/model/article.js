'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    // _id: { type: Schema.Types.ObjectId,unique:true}, //用户id
    uid: { type: Schema.Types.ObjectId}, //用户id
    title: { type: String},  //文章标题
    detail: { type: String},  //文章描述
    status: { type: String,default:'1' },  //文章状态 0上架  1下架
    tid: { type: Schema.Types.ObjectId, ref:'ArticleCate'},  //类型id
    lid: [{ type: Schema.Types.ObjectId, ref:'ArticleLabel' }],  //标签id
    titleImage:{type: String}, //文章封面
    content: { type: String },  //内容
    contentCode: { type: String },  //内容markdowm
    createTime:{ type: Date } //创建时间
  })
      
 return mongoose.model('Article', ArticleSchema,'article')
};