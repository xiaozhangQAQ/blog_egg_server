'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    user_name: { type: String }, //用户名称
    user_password: { type: String },  //用户密码
    roles: { type: Array, default:['editor']}  //用户角色 管理员admin 编辑者editor
  })
      
 return mongoose.model('User', UserSchema,'user')
};