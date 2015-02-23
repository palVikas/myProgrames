var bc = require('bcryptjs')
var pwd = 'vikas';
var salt = bc.genSaltSync(10);
var hash = bc.hashSync(pwd,salt);
console.log(salt);
var compare = bc.compareSync(pwd,hash);
console.log(compare);