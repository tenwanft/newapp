let bcrypt = require('bcrypt');

// 加密： var hash = bcrypt.hashSync(用户传过来的明文密码, 加盐数); 
let hash = bcrypt.hashSync('wyl123', 2); 
console.log(hash)
// 校验:  bcrypt.compareSync(用户传过来的明文密码, hash); // true|false
console.log(bcrypt.compareSync('wyl1234', hash))