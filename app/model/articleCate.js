'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const ArticleCateSchema = new Schema({
    uid: { type: Schema.Types.ObjectId,default:null },
    name: { type: String },
    createTime: { type: Date}
  })
      
 return mongoose.model('ArticleCate', ArticleCateSchema,'article_cate')
};