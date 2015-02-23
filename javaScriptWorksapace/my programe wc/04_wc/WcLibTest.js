var assert = require("assert")
var lib = require("./WcLib.js").lib;
var fs = require('fs');
var test={};
exports.test=test;

test['check in the directory given file is exist'] = function(){
	var filename = 'one.txt'
	assert.equal(true,lib.checkInFileDirectory(filename))
}
test['check in the directory given file is not exist'] = function(){
	var filename = 'three.js'
	assert.equal(false,lib.checkInFileDirectory(filename))
}
test['count the charecter is 18 of given text'] = function(){
	var msg = 'heloo how are you.'
	assert.deepEqual(18,lib.charecterCount(msg))
};
test['count is 0 if given text has no charecter'] = function(){
	var msg = ''
	assert.deepEqual(0,lib.charecterCount(msg))
};

test['input a fileName one.text it gives the path c:\User\vikaspal\Dropbox\step_vikas_pal\jsAssignments\04_wc'] = function(){
	 var filename = 'one.txt';
	 var expected = 'c:\\Users\\vikaspal\\Dropbox\\step_vikas_pal\\jsAssignments\\04_wc\\one.txt';
	 assert.deepEqual(expected,lib.filePath(filename));
};
 
 test['count the line is 1 of given text'] = function(){
	var msg = 'heloo how are you?\n I am fine.thankyou.'
	assert.deepEqual(1,lib.getCountLine(msg))
};
test['count the line is 0 if text is empty'] = function(){
	var msg = ''
	assert.deepEqual(0,lib.getCountLine(msg))
};

test['count the words of given text'] = function(){
	var msg = 'helooo    hiiii     \r\n     do you know           me  \r\n    wah!!';
	assert.deepEqual(7,lib.getWordsCount(msg))
};

test['count the maximum length of the line in the text'] = function(){
	var msg = 'hii how are you?\r\ni am fine,thankyou.\r\nwhats about you?.';
     assert.deepEqual(19,lib.getMaximumLengthOfTheLine(msg));
}

test['check the given option[-l,--lines,-c,--bytes,--char,-L,--max-line-length,-w,--words] is valid'] = function(){
      assert.equal(true ,lib.optionIsValid('-l'))
      assert.equal(true ,lib.optionIsValid('--bytes'))
      assert.equal(true ,lib.optionIsValid('-w'))
      assert.equal(false ,lib.optionIsValid('-z'))
      assert.equal(true ,lib.optionIsValid('--words'))
 };

 test['check user gives many option[-l,--lines,-c,--bytes,--char,-L,--max-line-length,-w,--words] is not repeted'] = function(){
 	var option = ['--l','--l','--lines','-c','--bytes','--chars','--L','--L'];
 	var expected = ['-l','-c','--L'];
 	// var option = [1,1,2,3,4,3,3,2]
 	// var expected = [1,2,3,4]
 	 assert.deepEqual(expected,lib.optionIsNotRepeted(option));
 };