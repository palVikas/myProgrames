var assert=require("assert")
var test={};
var m=require("./simModule").m;
exports.test=test; 

test['check number has 5 digit']=function(){
	assert.deepEqual(m.randomCode().length,5)
};

test['confirm number 0 if none number on correct place ']=function(){
	assert.deepEqual(0,m.confirmNumber("12375",'87647'));
};

test['confirm number as a string on correct place ']=function(){
	assert.deepEqual(3,m.confirmNumber("17375",'17677'));
	assert.deepEqual(5,m.confirmNumber("17375",'17375'));
};
test['confirm number  on correct place ']=function(){
	assert.deepEqual(3,m.confirmNumber(17375,17677));
	assert.deepEqual(5,m.confirmNumber(17375,17375));
};

test['present number count the number of string of existing digits which are not on correct place']=function(){
	assert.deepEqual(0,m.presentNumber("12345","12387"));
	assert.deepEqual(4,m.presentNumber("54321","12345"));
	assert.deepEqual(1,m.presentNumber("54321","67865"));
}
test['present number count the number of existing digits which are not on correct place']=function(){
	assert.deepEqual(1,m.presentNumber(12375,12387));
	assert.deepEqual(4,m.presentNumber(54321,12345));
	assert.deepEqual(1,m.presentNumber(54361,64865));
}
test['ans - 1222 , user -2234 ,m-1,p-1']=function(){
	assert.deepEqual(2,m.confirmNumber(12221,22341));
	assert.deepEqual(1,m.presentNumber(12221,22341));
}
test['ans - 2234 , user -1222 ,m-1,p-1']=function(){
	assert.deepEqual(2,m.confirmNumber(22342,12222));
	assert.deepEqual(1,m.presentNumber(22342,12222));
}
test['ans - 2234 , user -1222 ,m-1,p-1']=function(){
	assert.deepEqual(2,m.confirmNumber(22343,12223));
	assert.deepEqual(1,m.presentNumber(22343,12223));
}
test['ans - 1223 , user -3333 ,m-1,p-1']=function(){
	assert.deepEqual(1,m.confirmNumber(32262,33333));
	assert.deepEqual(0,m.presentNumber(33333,12232));
}
