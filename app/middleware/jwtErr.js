module.exports = (options) => {
    return async function jwtErr(ctx, next) {
        const token = ctx.request.header.logintoken;
        let decode = '';
        if (token) {
          try {
            // 解码token
            decode = ctx.app.jwt.verify(token, options.secret);
            await next();
          } catch (error) {
            ctx.status = 202;
            ctx.body = {
              message: 'token错误',
              code:50012
            };
            return;
          }
        } else {
          ctx.status = 202;
          ctx.body = {
            message: '没有token',
            code:50012
          };
          return;
        }
      };
}