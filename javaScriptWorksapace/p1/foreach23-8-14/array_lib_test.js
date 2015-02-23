var assert = require('assert');
var test = {};
var lib = require('./array_lib.js').lib;
exports.test=test;
var x = [{color:'green'},{color:'red'},{color:'blue'}];

test.insert_length_object_and_its_length_in_array=function(){
	var expected = [{color:'green',length:5},{color:'red',length:3},
	{color:'blue',length:4}];
	var ans = lib.length_in_given_array(x);
	 assert.deepEqual(expected,ans);
};
test.get_gretest_color_object_from_array = function(){
	var x = [{color:'green'},{color:'red'},{color:'blue'}];

	var expected = [{color:'green'}];
	var ans =lib.gretest_length_of_the_object(x); 
	assert.deepEqual(expected,ans);
};
test.get_sumof_the_all_vowel_in_object=function(){
	var x = [{color:'green'},{color:'red'},{color:'blue'}];

	var expected = 5;
	var ans = lib.sumof_the_vowel(x);
	assert.deepEqual(expected,ans);
};
test.count_vowel_of_the_name_aashish=function(){
	assert.equal(3,lib.count_Vowel({color:'aashish'}));
};