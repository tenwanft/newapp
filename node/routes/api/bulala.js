let express = require("express")
let router = express.Router()
router.get('/',(req,res,next)=>{
  console.log('bulala')
  res.json({bulala:'数据'})
})
module.exports = router;