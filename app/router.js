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
  //图片上传接口
  router.post('files', '/api/files/upload', controller.files.upload); 

  //首页统计接口
  router.post('home', '/api/home/total', jwtErr, controller.home.total);

  //文章接口
  router.post('articles', '/api/articles', jwtErr, controller.article.selectAll); //查找所有文章接口
  router.post('articles', '/api/addArticle', jwtErr, controller.article.add); //添加文章接口
  router.post('articles', '/api/deleteArticle', jwtErr, controller.article.delete); //删除文章接口
  router.post('articles', '/api/updateArticle', jwtErr, controller.article.update); //更新文章接口
  router.post('articles', '/api/articleChangeStatus', jwtErr, controller.article.changeStatus); //更新文章状态接口
  router.post('articles', '/api/selectArtById', jwtErr, controller.article.selectArtById); //根据文章id获取文章详情
  //文章类型接口
  router.post('articleCate', '/api/articleCate', jwtErr, controller.articleCate.select); //获取所有类型接口
  router.post('articleCate', '/api/articleCateAdd', jwtErr, controller.articleCate.add); //添加类型接口
  router.post('articleCate', '/api/articleCateUpdate', jwtErr, controller.articleCate.update); //更新类型接口
  router.post('articleCate', '/api/articleCateDelete', jwtErr, controller.articleCate.delete); //删除类型接口
  //文章标签接口
  router.post('articleLabel', '/api/articleLabel', jwtErr, controller.articleLabel.select); //获取所有标签接口
  router.post('articleLabel', '/api/articleLabelAdd', jwtErr, controller.articleLabel.add);  //添加标签接口
  router.post('articleLabel', '/api/articleLabelUpdate', jwtErr, controller.articleLabel.update); //更新标签接口
  router.post('articleLabel', '/api/articleLabelDelete', jwtErr, controller.articleLabel.delete); //删除标签接口


  //菜单接口
  router.post('sys', '/api/sys/menu',jwtErr, controller.sys.selectSysMenu);
  router.post('sys', '/api/sys/addMenu',jwtErr, controller.sys.addMenu);
  router.post('sys', '/api/sys/updateMenu',jwtErr, controller.sys.updateMenu);
  router.post('sys', '/api/sys/remoteMenu',jwtErr, controller.sys.remoteMenu);
};

// module.exports = app => {
//   app.router.resources('topics', '/api/v2/topics', app.controller.topics);
// };
