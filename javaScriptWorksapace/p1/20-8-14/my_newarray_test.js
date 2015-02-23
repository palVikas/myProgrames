var assert=require("assert");
var test={};

var index=[2,5,8,9,10,12];
var squre=function(value){
	return value*value;
};

test.squre_of_the_given_array_using_map=function(){
	var expected=[4,25,64,81,100,144];
	ans=index.map(squre);
	assert.deepEqual(expected,ans);
};
exports.test=test;