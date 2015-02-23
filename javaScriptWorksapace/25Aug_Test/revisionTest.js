var r = require('./revision.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.factorial_calculates_for_positive_numbers = function (){
	assert.equal(1,factorial(1));
	assert.equal(120,factorial(5));
};
test.add_5_increments_allItems_by_5 = function (){
	var x = [9,8,42,31,12];
	var y = [14,13,47,36,17];
	assert.deepEqual(r.add(x,5),y);
};
test.fibonacci_finds_the_nth_fibonacci_number = function (){
	var fibonacci = r.fibonacci;
	assert.equal(0,fibonacci(1));
	assert.equal(1,fibonacci(2));
	assert.equal(1,fibonacci(3));
	assert.equal(3,fibonacci(5));
};
test.fibonacci_returns_undefined_for_decimal_numbers = function (){
	var fibonacci = r.fibonacci;
	assert.equal(undefined,fibonacci(-0.5));
	assert.equal(undefined,fibonacci(5.85));	
};
test.fibonacci_returns_undefined_for_negative_numbers = function (){
	var fibonacci = r.fibonacci;
	assert.equal(undefined,fibonacci(-1));
	assert.equal(undefined,fibonacci(-5));	
};
test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'Good';
	assert.equal(r.findBestVowelWord(x),y);
};
test.findWorstVowelWord_finds_the_first_word_with_least_number_of_vowels = function (){
	var x = ['A','good','sky','is','dry','or','wet'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.findWorstVowelWord_finds_the_word_with_least_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.getVowelCount_gets_the_count_of_vowels_with_capital_letters = function (){
	assert.equal(r.getVowelCount('Owl'),1);
	assert.equal(r.getVowelCount('cOOling'),3);
	assert.equal(r.getVowelCount('I am not'),3);
};
test.impose_adds_items_of_second_array_if_available = function (){
	var x = [1,2,3];
	var y = [4,5];
	var z = [5,7,3];
	assert.deepEqual(r.impose(x,y),z);
};
test.impose_adds_items_only_if_present_in_first_array = function (){
	var x = [1,2];
	var y = [4,5,6];
	var z = [5,7];
	assert.deepEqual(r.impose(x,y),z);
};
test.impose_adds_only_item_of_two_equal_sized_arrays = function (){
	var x = [3];
	var y = [6];
	var z = [9];
	assert.deepEqual(r.impose(x,y),z);
};
test.readBinary_reads_numbers_as_binary = function (){
	assert.equal(0,r.readBinary(0));
	assert.equal(1,r.readBinary(1));
	assert.equal(2,r.readBinary(10));
	assert.equal(9,r.readBinary(1001));
	assert.equal(255,r.readBinary(11111111));
};
test.readBinary_reads_text_as_binary = function (){
	assert.equal(0,r.readBinary('0'));
	assert.equal(1,r.readBinary('1'));
	assert.equal(2,r.readBinary('10'));
	assert.equal(9,r.readBinary('1001'));
	assert.equal(255,r.readBinary('11111111'));
};
test.readOctal_reads_text_as_octal = function (){
	assert.equal(0,r.readOctal('0'));
	assert.equal(1,r.readOctal('1'));
	assert.equal(8,r.readOctal('10'));
	assert.equal(513,r.readOctal('1001'));
	assert.equal(299593,r.readOctal('1111111'));
};
test.reverseText_reverses_different_words_with_spaces = function (){
	var x = "hello. ola";
	var y = "alo .olleh";
	assert.equal(r.reverseText(x),y);
};
test.reverseText_reverses_given_text = function (){
	var x = "hello.";
	var y = ".olleh";
	assert.equal(r.reverseText(x),y);
};
test.reverseText_reverses_given_text_with_spaces = function (){
	var x = "hello. hello.";
	var y = ".olleh .olleh";
	assert.equal(r.reverseText(x),y);
};
test.reverseWords_reverses_words_in_sentance = function (){
	var x = 'The world is a very wide space. Or is it not?';
	var y = 'ehT dlrow si a yrev ediw .ecaps rO si ti ?ton';
	assert.deepEqual(r.reverseWords(x),y);
};
test.tidyText_removes_extra_spaces_between_words = function (){
	var x = 'The  world    is a very    wide space.  ';
	var y = 'The world is a very wide space.';
	assert.deepEqual(r.tidyText(x),y);
};
test.welcome_responds_with_call_that_for_functions = function (){
	var x = function(){console.log('hmm');};
	var y = function(z){return function(){z();}};
	assert.equal('call that', r.welcome(function(){}));
	assert.equal('call that', r.welcome(x));
	assert.equal('call that', r.welcome(Math.max));
	assert.equal('call that', r.welcome(y));
};
test.welcome_responds_with_get_out_for_infinite_answers = function (){
	var x = 0;
	assert.equal('get out of the world',r.welcome(1/0));
	assert.equal('get out of the world',r.welcome(12*42/x));
};
test.welcome_responds_with_hello_text_for_text = function (){
	assert.equal('hello text', r.welcome('hmm'));
	assert.equal('hello text', r.welcome('Here I am'));
	assert.equal('hello text', r.welcome('42'));
	assert.equal('hello text', r.welcome(''));
};
test.welcome_responds_with_hi_fields_for_objects = function (){
	assert.equal('hi', r.welcome({}));
	assert.equal('hi one,two', r.welcome({one:1,two:2}));
	assert.equal('hi compute,three', r.welcome({compute:function(){return 5},three:3}));
};
test.welcome_responds_with_see_ya_items_for_arrays = function (){
	assert.equal('seeya', r.welcome([]));
	assert.equal('seeya 1_2', r.welcome([1,2]));
	assert.equal('seeya compute_three_2', r.welcome(['compute','three',2]));
};
test.welcome_responds_with_to_be_for_boolean = function (){
	assert.equal('to be or not to be', r.welcome(true));
	assert.equal('to be or not to be', r.welcome(false));
	assert.equal('to be or not to be', r.welcome(5<6));
};