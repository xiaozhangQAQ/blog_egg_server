'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const LabelSchema = new Schema({
    aid: { type: Schema.Types.ObjectId },
    name: { type: String },
    createTime: { type: Date }
  })
      
 return mongoose.model('ArticleLabel', LabelSchema,'label')
};