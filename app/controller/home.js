'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  };

  async total() {
    const { ctx,app} = this;
    let datas = await ctx.service.home.total(ctx.request.body);
      // 设置响应体和状态码
      ctx.body = datas;
      ctx.status = 202;
  }
}

module.exports = HomeController;
