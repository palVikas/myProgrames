var r = require('./revision.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.if_evaluates_respective_values = function (){
	var good = function(){return 'good';};
	var bad = function(){return 'bad';};	
	assert.equal('good',r.if(true).then(good).else(bad));
	assert.equal('bad',r.if(false).then(good).else(bad));	
};

test.for_simulates_the_for_loop = function (){
	var i,text='';
	var items = [];
	var init = function(){i=0};
	var check = function(){return i<5};
	var next = function(){i++};
	var action = function(){text +='a'};KH
	var anotherAction = function(){items.unshift(i)};
	r.for(init,check,next).do(action);
	assert.equal(text,'aaaaa');
	r.for(init,check,next).do(anotherAction);
	assert.deepEqual(items,[4,3,2,1,0]);
};

test.circle_is_represented_by_radius_and_centre = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.equal(a,'[circle @0,0 radius:7]');
};

test.while_performs_action_as_long_as_condition_prevails = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIsLessThan10 = function(){return count<10;}
	var while_count_is_less_than_10 = r.while(countIsLessThan10);
	var incrementCount = function(){count++;}
	while_count_is_less_than_10(incrementCount);
	assert.equal(10,count);
};
test.add_1_increments_allItems = function (){
	var x = [9,8,42,31,12];
	var y = [10,9,43,32,13];
	assert.deepEqual(r.add(x,1),y);
};
test.add_5_increments_allItems_by_5 = function (){
	var x = [9,8,42,31,12];
	var y = [14,13,47,36,17];
	assert.deepEqual(r.add(x,5),y);
};
test.caculate_calculates_the_value_of_an_expression = function (){
	assert.ok('13' === r.calculate('(4*5+32)/4'));
	assert.ok('3' === r.calculate('((1/2)+(4/3)-(1/3))*2'));
};
test.cannot_edit_a_rectangles = function (){
	var a = r.createRectangle([0,0],[5,10]);
	a.length = 7;
	a.width = 11;
	a.area = 51;
	a.perimeter = 31;	
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
};
test.changeToBinary_converts_numbers_to_binary = function (){
	assert.equal(true,11 === r.changeToBinary(3));
	assert.equal(true, 11111111 === r.changeToBinary(255));	
};
test.changeToHex_converts_numbers_to_hexadecimal = function (){
	assert.equal('7b', r.changeToHex(123));
	assert.equal('ff', r.changeToHex(255));	
	assert.equal('3ff', r.changeToHex(1023));	
};
test.changeToOctal_converts_numbers_to_octal = function (){
	assert.equal(true,11 === r.changeToOctal(9));
	assert.equal(true, 1111111 === r.changeToOctal(299593));	
};
test.circle_is_not_editable = function (){
	var a = r.createCircle([0,0],7);
	a.radius = 9;
	a.area = 8;
	a.perimeter = 1;
	assert.equal(7,a.radius);
	assert.equal(154,a.area);
	assert.equal(44,a.perimeter);
};
test.createRectangle_creates_a_Rectangle_of_a_given_dimension_at_given_place = function (){
	var a = r.createRectangle([0,0],[5,10]);
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
};
test.decodeList_decodes_the_text_written_in_reverse = function (){
	var x = '.doog si sihT';
	var y = "This is good.";	
	assert.equal(r.decodeList(x),y);	
};
test.decodeList_decodes_the_text_written_in_reverse_in_list = function (){
	var x = ['.doog','si','sihT'];
	var y = "This is good.";
	var z = ['.doog','si','sihT'];
	assert.equal(r.decodeList(x),y);
	assert.deepEqual(x,z);
};
test.do_performs_action_as_long_as_condition_prevails = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIsLessThan10 = function(){return count<10;}
	var incrementCount = function(){count++;}
	r.do(countIsLessThan10,incrementCount);
	assert.equal(10,count);
};
test.factorial_calculates_for_positive_numbers = function (){
	assert.equal(1,factorial(1));
	assert.equal(120,factorial(5));
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
test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels_ignoring_case = function (){
	var x = ['A','dry','sky','is','a','dry','sky'];
	var y = 'A';
	assert.equal(r.findBestVowelWord(x),y);
};
test.findBestVowelWord_finds_the_word_with_highest_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky','and','orange','sun'];
	var y = 'orange';
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
test.findX_gives_y_coordinate_of_a_line_only_inside = function (){
	var a = r.createLine([0,0],[3,4]);
	assert.equal(0.75,a.findX(1).toFixed(4));
	assert.equal(1.125,a.findX(1.5).toFixed(4));
	assert.equal(null,a.findX(5));
	assert.equal(null,a.findX(-1));
};
test.getVowelCount_gets_the_count_of_vowels_with_capital_letters = function (){
	assert.equal(r.getVowelCount('Owl'),1);
	assert.equal(r.getVowelCount('cOOling'),3);
	assert.equal(r.getVowelCount('I am not'),3);
};
test.getVowelCount_gives_the_count_of_vowels = function (){
	assert.equal(r.getVowelCount('morning'),2);
	assert.equal(r.getVowelCount('cooling'),3);
	assert.equal(r.getVowelCount('i am'),2);
};
test.hasPoint_tells_if_a_given_point_is_in_the_rectangle = function (){
	var a = r.createRectangle([0,0],[5,10]);
	assert.ok(a.hasPoint([1,1]));
	assert.ok(a.hasPoint([3,3]));
	assert.ok(!a.hasPoint([5,11]));
	assert.ok(!a.hasPoint([-1,0]));
};
test.if_evaluates_respective_values = function (){
	var good = function(){return 'good';};
	var bad = function(){return 'bad';};	
	assert.equal('good',r.if(true,good,bad));
	assert.equal('bad',r.if(false,good,bad));	
};
test.if_gives_respective_values = function (){
	assert.equal(5,r.if(true,5,6));
	assert.equal(6,r.if(false,5,6));
};
test.impose_adds_individual_items_of_two_equal_sized_arrays = function (){
	var x = [1,2,3];
	var y = [4,5,6];
	var z = [5,7,9];
	assert.deepEqual(r.impose(x,y),z);
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
test.moveTo_moves_the_circle_to_the_new_place = function (){
	var a = r.createCircle([0,0],7);
	var b = a.moveTo([-5,-5]);
	assert.equal(7,a.radius);
	assert.equal(154,a.area);
	assert.equal(44,a.perimeter);	
	assert.equal(7,b.radius);
	assert.equal(154,b.area);
	assert.equal(44,b.perimeter);	
};
test.range_gives_all_numbers_in_range = function (){
	//Dont use loops
	assert.deepEqual(r.range(1,5),[1,2,3,4]);
	assert.deepEqual(r.range(2,5),[2,3,4]);
	assert.deepEqual(r.range(-5,1),[-5,-4,-3,-2,-1,0]);
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
test.validatePositiveNumber_does_not_throw_error_if_valid = function (){
	var tryValidation = function(number,expectedError){
		try{
			r.validatePositiveNumber(number);
			assert.ok(expectedError === undefined);
		}catch(err){
			assert.deepEqual(err.message,expectedError.message);
		}
	};

	tryValidation(5);	
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
test.welcome_responds_with_hey_count_for_numbers = function (){
	assert.equal('hey count', r.welcome(2));
	assert.equal('hey count', r.welcome(420));
	assert.equal('hey count', r.welcome(0));
	assert.equal('hey count', r.welcome(-25));
};
test.welcome_responds_with_hey_dont_count_for_bad_calculation = function (){
	assert.equal('hey dont count',r.welcome(0/'a'));
	assert.equal('hey dont count',r.welcome('a' * 0));
};
test.welcome_responds_with_hi_fields_for_objects = function (){
	assert.equal('hi', r.welcome({}));
	assert.equal('hi one,two', r.welcome({one:1,two:2}));
	assert.equal('hi compute,three', r.welcome({compute:function(){return 5},three:3}));
};
test.welcome_responds_with_oh_no_for_null = function (){
	assert.equal('oh no',r.welcome(null));
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