'use strict';

const Controller = require('egg').Controller;

class ArticleLabelController extends Controller {
    async select() {
        // const ctx = this.ctx;
        const { ctx,app} = this;
        
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);
        // 调用 service 创建一个 topic
        // console.log(logintoken)
        let datas = await ctx.service.articleLabel.select(ctx.request.body);
        
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async add(){
        const { ctx,app} = this;
        let datas = await ctx.service.articleLabel.add(ctx.request.body);
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async update(){
        const { ctx,app} = this;
        let datas = await ctx.service.articleLabel.update(ctx.request.body);
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async delete(){
        const { ctx,app} = this;
        let datas = await ctx.service.articleLabel.delete(ctx.request.body);
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }
}

module.exports = ArticleLabelController;
