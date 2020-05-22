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
            ctx.status = 401;
            ctx.body = {
              message: error.message,
            };
            return;
          }
        } else {
          ctx.status = 401;
          ctx.body = {
            message: '没有token',
          };
          return;
        }
      };
}