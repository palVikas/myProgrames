var r = require('./revision.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.welcome_responds_with_see_ya_items_for_arrays = function (){
	assert.equal('seeya', r.welcome([]));
	assert.equal('seeya 1_2', r.welcome([1,2]));
	assert.equal('seeya compute_three_2', r.welcome(['compute','three',2]));
};
test.add_1_increments_allItems = function (){
	var x = [9,8,42,31,12];
	var y = [10,9,43,32,13];
	assert.deepEqual(r.add(x,1),y);
};
test.fibonacci_finds_the_nth_fibonacci_number = function (){
	var fibonacci = r.fibonacci;
	assert.equal(0,fibonacci(1));
	assert.equal(1,fibonacci(2));
	assert.equal(1,fibonacci(3));
	assert.equal(3,fibonacci(5));
};
test.fibonacci_returns_undefined_for_negative_numbers = function (){
	var fibonacci = r.fibonacci;
	assert.equal(undefined,fibonacci(-1));
	assert.equal(undefined,fibonacci(-5));	
};
test.impose_adds_items_only_if_present_in_first_array = function (){
	var x = [1,2];
	var y = [4,5,6];
	var z = [5,7];
	assert.deepEqual(r.impose(x,y),z);
};
test.readOctal_reads_numbers_as_octal = function (){
	assert.equal(0,r.readOctal(0));
	assert.equal(1,r.readOctal(1));
	assert.equal(8,r.readOctal(10));
	assert.equal(513,r.readOctal(1001));
	assert.equal(299593,r.readOctal(1111111));
};
test.readOctal_reads_text_as_octal = function (){
	assert.equal(0,r.readOctal('0'));
	assert.equal(1,r.readOctal('1'));
	assert.equal(8,r.readOctal('10'));
	assert.equal(513,r.readOctal('1001'));
	assert.equal(299593,r.readOctal('1111111'));
};
test.reverseText_reverses_given_text = function (){
	var x = "hello.";
	var y = ".olleh";
	assert.equal(r.reverseText(x),y);
};
test.reverseWords_reverses_words_in_sentance = function (){
	var x = 'The world is a very wide space. Or is it not?';
	var y = 'ehT dlrow si a yrev ediw .ecaps rO si ti ?ton';
	assert.deepEqual(r.reverseWords(x),y);
};
test.welcome_responds_with_call_that_for_functions = function (){
	var x = function(){console.log('hmm');};
	var y = function(z){return function(){z();}};
	assert.equal('call that', r.welcome(function(){}));
	assert.equal('call that', r.welcome(x));
	assert.equal('call that', r.welcome(Math.max));
	assert.equal('call that', r.welcome(y));
};
test.welcome_responds_with_hey_decimal_for_decimal_numbers = function (){
	assert.equal('hey decimal', r.welcome(2.1));
	assert.equal('hey decimal', r.welcome(420.45));
	assert.equal('hey decimal', r.welcome(0.1));
	assert.equal('hey decimal', r.welcome(-25.01));
};
test.findWorrstvowel_find_the_word_with_least_number_of_vowel=function(){
	var x=['A','good','sky','is','dry','or','wet'];
	var y='sky';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.findBestVowelWord_find_the_firdtvowel_with_highest_number_of_vowel_ignoringcase=function(){
	var x=['A','dry','sky','is','a','dry','sky'];
	var y='A';
	assert.equal(r.findBestVowelWord(x),y);
}
test.findBestVowelWord_find_the_Word_with_least_number_of_vowel=function(){
	var x=['Good','morning','sky','is','a','bright','one'];
	var y='A';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.moveTo_moves_the_Rectangle_to_the_new_place = function (){
	var a = r.createRectangle([0,0],[5,10]);
	var b = a.moveTo([-5,-5]);
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
	assert.equal(5,b.length);
	assert.equal(10,b.width);
	assert.equal(50,b.area);
	assert.equal(30,b.perimeter);
};