'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async selectAll() {
        const ctx = this.ctx;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);
        // 调用 service 创建一个 topic
        const datas = await ctx.service.article.select(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    };
    async selectArtById(){
        const ctx = this.ctx;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);
        // 调用 service 创建一个 topic
        const datas = await ctx.service.article.selectArtById(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }; 
    async add(){
        const ctx = this.ctx;
        const datas = await ctx.service.article.add(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async delete(){
        const ctx = this.ctx;
        const datas = await ctx.service.article.delete(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async update(){
        const ctx = this.ctx;
        const datas = await ctx.service.article.update(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async changeStatus(){
        const ctx = this.ctx;
        const datas = await ctx.service.article.changeStatus(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }
}

module.exports = ArticleController;