'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    user_name: { type: String }, //用户名称
    user_password: { type: String }  //用户密码
  })
      
 return mongoose.model('User', UserSchema,'user')
};