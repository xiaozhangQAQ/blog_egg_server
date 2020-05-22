'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async selectUser() {
        // const ctx = this.ctx;
        const { ctx,app} = this;
        
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);
        // 调用 service 创建一个 topic
        // console.log(logintoken)
        let datas = await ctx.service.user.selectUser(ctx.request.body);
        // console.log(datas.data)
        if(datas.data){
            const logintoken = app.jwt.sign({

                'username': ctx.request.body.user_name, //需要存储的 token 数据
                //......
    
            }, app.config.jwt.secret);
            ctx.set({'logintoken':logintoken})//设置headers
            datas.data.logintoken = logintoken;
        }
        
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }
}

module.exports = UserController;
