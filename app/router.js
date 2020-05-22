'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwtErr = middleware.jwtErr(app.config.jwt);


  router.get('/', controller.home.index);

  router.post('login', '/api/login', controller.user.selectUser);

  router.post('home', '/api/home/total', jwtErr, controller.home.total);

  router.post('articles', '/api/articles', jwtErr, controller.article.selectAll);
  router.post('articles', '/api/addArticle', jwtErr, controller.article.add);
  router.post('articles', '/api/deleteArticle', jwtErr, controller.article.delete);
  router.post('articles', '/api/updateArticle', jwtErr, controller.article.update);

  router.post('articleCate', '/api/articleCate', jwtErr, controller.articleCate.select);
  router.post('articleCate', '/api/articleCateAdd', jwtErr, controller.articleCate.add);
  router.post('articleCate', '/api/articleCateUpdate', jwtErr, controller.articleCate.update);
  router.post('articleCate', '/api/articleCateDelete', jwtErr, controller.articleCate.delete);

  router.post('articles', '/api/articleLabel', jwtErr, controller.articleLabel.select);
};

// module.exports = app => {
//   app.router.resources('topics', '/api/v2/topics', app.controller.topics);
// };
