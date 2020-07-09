'use strict';

const Controller = require('egg').Controller;

class FilesController extends Controller {
    async upload(){
        const {ctx} = this;
        const resData = await ctx.service.files.upload(ctx.request.body);
        ctx.body = resData;
        ctx.status = 202;
    }  
}

module.exports = FilesController;