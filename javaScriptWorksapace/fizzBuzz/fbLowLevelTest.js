var assert = require("assert");
var lm = require('./fbLowLevel.js').lm;
var test={};
exports.test=test;
test['createCount initialize count at 0'] = function(){
	var count = lm.createCount();
	assert.equal(0,count.getCount());
}
test['next incress count by 1'] = function(){
	var count = lm.createCount()
	count.next();
	assert.equal(1,count.getCount());
	count.next();
	assert.equal(2,count.getCount());
	count.next();
	count.next();
	assert.equal(4,count.getCount());

}
test['isFizz for fizz term is true ']=function(){

	assert.ok(lm.isFizz(3,3));
}
test['isFizz for notFizz term is false'] = function(){
	assert.ok(!lm.isFizz(4,3));
}