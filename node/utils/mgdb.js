let MongoClient  = require('mongodb').MongoClient;//链接对象
let ObjectId  = require('mongodb').ObjectID;//链接对象


module.exports = ({url,dbName,collectionName},callback) => {
  url = url || 'mongodb://localhost:27017'
  dbName = dbName || 'newsapp'
  collectionName = collectionName || 'user'

  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    //client 链接体
    if(err){
      console.log('库链接错误')
    }else{
      const db = client.db(dbName);//db == 1903库
      let collection = db.collection(collectionName);//collection==user集合（表) 

      callback({collection,client,ObjectId})
  
    }
    
  });



}