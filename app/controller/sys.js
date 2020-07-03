'use strict';

const Controller = require('egg').Controller;

class SysMenuController extends Controller {
    async selectSysMenu() {
        const ctx = this.ctx;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // ctx.validate(createRule, ctx.request.body);
        // 调用 service 创建一个 topic
        const datas = await ctx.service.sys.selectSysMenu(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    };

    async addMenu(){
        const ctx = this.ctx;
        const datas = await ctx.service.sys.addSysMenu(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async remoteMenu(){
        const ctx = this.ctx;
        const datas = await ctx.service.sys.remoteMenu(ctx.request.body);
        // console.log(datas)
        // 设置响应体和状态码
        ctx.body = datas;
        ctx.status = 202;
    }

    async updateMenu(){
        const ctx = this.ctx;
        const datas = await ctx.service.sys.updateSysMenu(ctx.request.body);
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

module.exports = SysMenuController;