'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const SysMenuSchema = new Schema({
    id: { type: Schema.Types.ObjectId,unique:true}, //菜单id
    parentId: { type: String}, //上级菜单id
    name: { type: String},  //标题
    path: { type: String},  //链接
    component: { type: String },  //组件
    meta: { title:{type: String},icon:{type: String,default:'example'} },  //meta
    sort:{ type:Number}
  })
      
 return mongoose.model('SysMenu', SysMenuSchema,'sys_menu')
};