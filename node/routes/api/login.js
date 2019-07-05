let express = require("express")
let router = express.Router()
let mgdb = require('../../utils/mgdb')
let bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  // console.log(req.body.username, req.body.password)


  let { username, password, save } = req.body

  //判断必传参数是否已传递
  if (!username || !password) {
    res.send({ err: 1, mess: '用户名或者密码不能为空' });
    return;
  } 
  // console.log('兜库')
  //兜库
  mgdb({
    dbName: 'newsapp',
    collectionName: 'user'
  }, ({ collection, client }) => {
    collection.find({
      username
    },{
      projection:{username:0}
    }).toArray((err,result)=>{
      if(!err){
       
        if(result.length>0){
          console.log(result)

          //校验密码
          if(bcrypt.compareSync(password, result[0].password)){
            if(save){
              //种cookie，留session
              // req.session['newsapp_username']=username+id
              req.session['newsapp_username']= result[0]._id
            }
            delete result[0].password;
            res.send({err:0,mess:'登录成功',data:result[0]})
          }else{
            res.send({err:1,mess:'用户名或者密码有误'})
          }
        }else{
          res.send({err:1,mess:'用户名不存在'})
        }
      }else{
        res.send({err:1,mess:'库链接错误'})
      }
      client.close();
    })
  })


})
module.exports = router;