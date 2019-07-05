module.exports = (req,res,next)=>{
  //处理授权服务

  //处理公共参数和数据  _page _limit q _sort _start _end
  req.query._page = req.query._page - 1 || require('../../config/params')._page;
  req.query._limit = req.query._limit - 0 || require('../../config/params')._limit;
  req.query._sort = req.query._sort || require('../../config/params')._sort;
  req.query.q = req.query.q || require('../../config/params').q;

  req.body._page = req.body._page - 1 || require('../../config/params')._page;
  req.body._limit = req.body._limit-0 || require('../../config/params')._limit;
  req.body._sort = req.body._sort || require('../../config/params')._sort;
  req.body.q = req.body.q || require('../../config/params').q;
  
  // console.log('params.js',req.params)
  req.rootParams = req.params[0].split('/')[0]
  next();
}