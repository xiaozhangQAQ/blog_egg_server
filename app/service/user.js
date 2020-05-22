const Service = require('egg').Service;

class userService extends Service {
    async selectUser(params) {
      
      // 调用 CNode V1 版本 API
      // const result = await this.ctx.curl(`${this.root}/topics`, {
      //   method: 'post',
      //   data: params,
      //   dataType: 'json',
      //   contentType: 'json',
      // });
    //   let datas = await this.ctx.model.user.find();


        let result = {};
        // console.log(params)
        let datas = await this.ctx.model.User.findOne(params);
        if(datas._doc){
            result={code:20000,data:{...datas._doc},
            errmsg:'success'};
            return result;
        }  

        result={code:30000,message:'该用户不存在!'};
        return result;
    }
  }

  module.exports = userService;