var assert = require('assert');
var m = require('./mm.js').m;
var test={};
exports.test = test;

test['computer select any rendom 5 number']=function(){
	assert.deepEqual(m.randomCode().length,5)
};
test['check user code not match if position are not same']=function(){
	assert.deepEqual(0,m.checkMatch([1,2,6,7,8],[4,5,4,1,2]))
}
test['check user code  match if position are  same']=function(){
	assert.deepEqual(2,m.checkMatch([1,2,6,7,8],[1,5,6,1,2]))
}
test['']