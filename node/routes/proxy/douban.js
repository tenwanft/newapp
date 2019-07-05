var express = require('express');
var router = express.Router();
var https = require('https')

router.get('/', function(req, res, next) {
  // console.log(req.baseUrl);//返回请求的全段地址
  // console.log(req.query);

  let start = req.query.start || 0;
  let count = req.query.count || '';
  let url = req.baseUrl.slice(req.baseUrl.indexOf('/v2'));//截取v2之后的路径
  // console.log(url)
  
  let options={
    // hostname:'api.douban.com',
    hostname:'douban.uieee.com',
    port:443,
    path:url+'?start='+start+'&count='+count,
    method:'GET'
  };

  //返回请求对象reqHttp
  let reqHttp = https.request(options,(resHttp)=>{

    var str='';
    resHttp.on('data',(chunk)=>{str+=chunk})  
    resHttp.on('end',()=>{
      res.send(JSON.parse(str))
    })

  });	

  reqHttp.on('error',(err)=>{console.log('数据代理错误',err)});	//监听请求失败信息
  reqHttp.end();//一定请求结束

});

module.exports = router;









