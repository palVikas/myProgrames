var assert = require('assert');
var mm = require('./mainModule.js').game;
var test ={};
exports.test=test;

test['checkuser input  for charecters']=function(){
	assert.deepEqual(false,mm.checkUserInput('ahiii'));
}
test['checkuser input  for big length']=function(){
	assert.deepEqual(false,mm.checkUserInput('123456'));
}
test['checkuser input  for write ans']=function(){
	assert.deepEqual(true,mm.checkUserInput('12345'));
}
test['checkuser input  for special charecters']=function(){
	assert.deepEqual(false,mm.checkUserInput('123@4'));
}
test['checkuser input  for desimal number']=function(){
	assert.deepEqual(false,mm.checkUserInput(123.0));
}
test['geusse number']=function(){
	assert.deepEqual([2,1],mm.guessNumber(13452,36752));
}
test['geusse another number']=function(){
	assert.deepEqual([1,4],mm.guessNumber(14456,44165));
}
test['geusse charecter ']=function(){
	assert.deepEqual([2,2],mm.guessNumber(14556,14165));
}



