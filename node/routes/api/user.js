let express = require("express")
let router = express.Router()
let mgdb = require('../../utils/mgdb')

router.get('/',(req,res,next)=>{
  let _id = req.session['newsapp_username'];
  //对比session
  if(!_id) res.send({err:1,mess:'未登录'})
  
  //对比成功 -》 兜库
  // console.log('user',req.session['newsapp_username'])

  mgdb({
    dbName: 'newsapp',
    collectionName: 'user'
  }, ({ collection, client, ObjectId }) => {
    collection.find({
      _id:ObjectId(_id)
    },{
      projection:{_id:0,password:0}
    }).toArray((err,result)=>{
      if(!err){
       
        if(result.length>0){
          // console.log(result)
          
          res.send({err:0,mess:'成功',data:result[0]})

        }else{
          res.send({err:1,mess:'没有这个用户，需要重写登录'})
        }
      }else{
        res.send({err:1,mess:'库链接错误'})
      }
      client.close();
    })
  })

})

module.exports = router;