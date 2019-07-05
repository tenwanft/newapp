let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mgdb');
let pathLib = require('path')
let fs = require('fs');

//添加 
router.post('/', (req, res, next) => {
  
  let { content, title, sub_title, auth } = req.body;//拆除body数据
  let time = Date.now();//创建服务器上传时间
  
   //multer多图片循环，找到
  let icon, banner;
  
  req.files && req.files.forEach((file, index) => {
    //抓取到对应图片
    if (file.fieldname === 'icon') {
      icon = require('../../config/path').user.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
    }
    if (file.fieldname === 'banner') {
      banner = require('../../config/path').banner.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
    }
    // console.log('a',icon,banner)
    fs.renameSync(//本地图片命名
      file.path,
      file.path + pathLib.parse(file.originalname).ext
    )
  })



  //未传图片处理
  if (!banner) banner = require('../../config/path').normal;
  if (!icon) icon = require('../../config/path').normal;

  // console.log('b',banner,icon)

  mgdb(
    {
      dbName:'newsapp',
      collectionName: 'banner'
    },
    ({ collection, client }) => {
      collection.insertOne(
        { title, sub_title, banner, time, detail: { icon, auth, content } }
        ,
        (err, result) => {
          if (!err && result.result.ok) {
            // res.send({ error: 0, mess: '成功', data:  result.result.ops[0] })
            res.send({ error: 0, mess: '成功', data: { id: result.insertedId, title, sub_title, banner, time, detail: { icon, auth, content } } })
            

            //广播给所有客户端 
            let io=require('../../bin/www');
            io.emit('new_banner', {data: { id: result.insertedId, title, sub_title, banner, time, detail: { icon, auth, content }}})

          } else {
            res.send({ error: 1, mess: '添加失败' })
          }
          client.close();
        }
      )
    }
  );
})

//删 
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  if (!id) {
    res.send({ error: 1, mess: 'id为必传参数' })
  }

  mgdb({
    dbName:'newsapp',
    collectionName: 'banner'
  }, ({ collection, client, ObjectId }) => {
    collection.deleteOne({
      _id: ObjectId(id)
    },((err, result) => {
      // console.log(result);// 添加条件 > 0
      if(result.result.n>0){
        res.send({error:0,mess:'删除成功'})
      }else{
        res.send({error:1,mess:'删除失败'})
      }
      client.close();//关闭连接
    }))
  })
})

//改
router.patch('/:id', (req, res, next) => {
  let id = req.params.id;
  if (!id) {
    res.send({ error: 1, msg: 'id为必传参数' })
  }

  mgdb({
    collectionName: 'banner'
  }, ({ collection, client, ObjectId }) => {
    collection.find({
      _id: ObjectId(id)
    }, {
        projection: { _id: 0 }//显示的key 
      }).toArray((err, result) => {

        // result[0] = 库数据

        //传过来的数据 和 库数据  合并
        let {title,sub_title,auth,content} = req.body;
        title = title || result[0].title;
        sub_title = sub_title || result[0].sub_title;
        auth = auth || result[0].auth;
        content = content || result[0].content;


        //multer多图片循环，找到
        let icon, banner;
        req.files && req.files.forEach((file, index) => {
          //抓取到对应图片
          if (file.fieldname === 'icon') {
            icon = require('../../config/path').user.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
          }
          if (file.fieldname === 'banner') {
            banner = require('../../config/path').banner.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
          }
          fs.renameSync(//本地图片命名
            file.path,
            file.path + pathLib.parse(file.originalname).ext
          )
        })

        icon = icon || result[0].detail.icon;
        banner = banner || result[0].banner;
        let time = Date.now();


        mgdb({
          collectionName: 'banner'
        }, ({ collection, client, ObjectId }) => {
          collection.updateMany({
            _id: ObjectId(id)
          },{
            $set:{
              title,sub_title,banner,time,detail:{icon,auth,content}
            }
          },{
            upsert:false, //插入
            projection:false //全局替换
          },((err, result) => {
            // console.log(result.result.n);//成功条件 > 0
            // console.log(result.modifiedCount);// 修改的条数

            if(result.result.n>0){
              res.send({error:0,msg:'成功'})// + 返回改后的数据
            }else{
              res.send({error:1,msg:'失败'})  
            }
            client.close();//关闭连接
          }))
        })
        
      })
  })
})

module.exports = router;