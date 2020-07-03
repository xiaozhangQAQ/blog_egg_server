'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwtErr = middleware.jwtErr(app.config.jwt);


  router.get('/', controller.home.index);
  //登录接口
  router.post('login', '/api/login', controller.user.selectUser);

  //首页统计接口
  router.post('home', '/api/home/total', jwtErr, controller.home.total);

  //文章接口
  router.post('articles', '/api/articles', jwtErr, controller.article.selectAll);
  router.post('articles', '/api/addArticle', jwtErr, controller.article.add);
  router.post('articles', '/api/deleteArticle', jwtErr, controller.article.delete);
  router.post('articles', '/api/updateArticle', jwtErr, controller.article.update);
  router.post('articles', '/api/articleChangeStatus', jwtErr, controller.article.changeStatus);
  //文章类型接口
  router.post('articleCate', '/api/articleCate', jwtErr, controller.articleCate.select);
  router.post('articleCate', '/api/articleCateAdd', jwtErr, controller.articleCate.add);
  router.post('articleCate', '/api/articleCateUpdate', jwtErr, controller.articleCate.update);
  router.post('articleCate', '/api/articleCateDelete', jwtErr, controller.articleCate.delete);
  //文章标签接口
  router.post('articleLabel', '/api/articleLabel', jwtErr, controller.articleLabel.select);
  router.post('articleLabel', '/api/articleLabelAdd', jwtErr, controller.articleLabel.add);
  router.post('articleLabel', '/api/articleLabelUpdate', jwtErr, controller.articleLabel.update);
  router.post('articleLabel', '/api/articleLabelDelete', jwtErr, controller.articleLabel.delete);


  //菜单接口
  router.post('sys', '/api/sys/menu', controller.sys.selectSysMenu);
  router.post('sys', '/api/sys/addMenu', controller.sys.addMenu);
  router.post('sys', '/api/sys/updateMenu', controller.sys.updateMenu);
  router.post('sys', '/api/sys/remoteMenu', controller.sys.remoteMenu);
};

// module.exports = app => {
//   app.router.resources('topics', '/api/v2/topics', app.controller.topics);
// };
