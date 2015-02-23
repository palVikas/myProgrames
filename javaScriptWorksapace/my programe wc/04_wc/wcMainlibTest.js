var assert = require("assert")
var mainlib = require("./wcMainlib.js").mainlib;
var fs = require('fs');
var test={};
exports.test=test;


test['user gives -l option it should be gives count of lines'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '-l'
	assert.equal(2,mainlib.getCountWithOption(textfile,option))
};
 test['user gives --lines option it should be gives count of lines'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '--lines'
	assert.equal(2,mainlib.getCountWithOption(textfile,option))
};

  test['user gives -c option it should be gives count of charecter'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '-c'
	assert.equal(48,mainlib.getCountWithOption(textfile,option))
};

  test['user gives --chars option it should be gives count of charecter'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '--chars'
	assert.equal(48,mainlib.getCountWithOption(textfile,option))
};
  test['user gives --words option it should be gives count of words'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '--words'
	assert.equal(10,mainlib.getCountWithOption(textfile,option))
};
  test['user gives --L option it should be gives max length of the line'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '-L'
	assert.equal(26,mainlib.getCountWithOption(textfile,option))
};
test['user gives invalid option it should be gives a msg invalid option'] = function(){
	var file = 'one.txt';
	var textfile = fs.readFileSync(file,'utf8');
	var option = '-u'
	assert.equal('invalid option',mainlib.getCountWithOption(textfile,option))
};
