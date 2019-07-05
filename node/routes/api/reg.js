let express = require("express")
let router = express.Router()
let pathLib = require('path');
let fs = require('fs');
let mgdb = require('../../utils/mgdb')
let bcrypt = require('bcrypt');

router.post('/',(req,res,next)=>{
  let {username,password,nikename} = req.body

  if(!username || !password) res.json({err:1,mess:'用户名密码为必传参数'})


  // nikename = nikename || npm下载的处理网名的封装()
  password = bcrypt.hashSync(password, 2); 
  nikename = nikename || '系统给你的'
  let follow = 0;
  let fans = 0;
  let time = Date.now();//注册时间

  // console.log(req.files)
  let icon;
  if(!req.files || req.files.length==0){
    icon = require('../../config/path').normal;//     /upload/xx.jpg
  }else{
    //改名
    fs.renameSync(
      req.files[0].path,
      req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    )
    icon = require('../../config/path').user.uploadUrl + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
  }

  // console.log(1,username,icon,nikename)

  //兜库

  mgdb({
    dbName: 'newsapp',
    collectionName: 'user'
  }, ({ collection, client, ObjectId }) => {

    collection.find({
      username
    }).toArray((err,result)=>{
      // console.log(2,result)
      if(!err){
        if(result.length>0){
          res.send({err:1,mess:'用户名已存在'})
          client.close();
        }else{
          //插入
          collection.insertOne({
            username,password,nikename,time,icon,follow,fans
          },{
            projection:{username:0,password:0}
          },(err,result)=>{
            if(!err){
              if(result.result.ok>0){
                console.log(result.result.insertedId)
                res.send({err:0,mess:'注册成功',data:result[0]})
              }else{
                res.send({err:1,mess:'注册失败'})
              }
            }else{
              res.send({err:1,mess:'库链接错误'})
            }
            client.close();
          })
        }
      }else{
        res.send({err:1,mess:'库链接错误'})
        client.close();
      }
    })
  })

})

module.exports = router;