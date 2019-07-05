let https = require('https');

let options ={
  hostname:'douban.uieee.com',
  port:443,
  path:'/v2/movie/top250?start=0&count=1',
  method:'GET'
};

//发送http[s]请求
//返回请求对象reqHttp
let reqHttp = https.request(options,(resHttp)=>{
  // resHttp 响应对象
	// resHttp.statusCode 状态码  200 OK
	// resHttp.headers 获取响应头信息
  // resHttp.setEncoding('utf-8') 设置编码方式
  let str = '';
	resHttp.on('data',(chunk)=>str+=chunk)
	resHttp.on('end',()=>{
    console.log(JSON.parse(str))
  }) 
})	

reqHttp.on('error',(err)=>{console.log(err)});	//监听请求失败信息
reqHttp.end();//请求结束