var assert = require('assert');
var lib = require('./peoplelib.js').lib;

var test = {};
exports.test = test;

var people = ['Ananthu','Prasanjit','Pooja Prajapati','Pooja Rani',
'Vishnu','Gaurav','Dolly','Paramatma','Jaiprakash','Vikas','Krati'];

test.arrange_people_by_their_name_length = function(){
	var expected = ['Dolly','Krati','Vikas','Gaurav','Vishnu','Ananthu',
	'Paramatma','Prasanjit','Jaiprakash','Pooja Rani','Pooja Prajapati'];
	ans = lib.arrange(people);
	assert.deepEqual(expected,ans)
};
test.gives_1_when_1st_arg_is_larger = function(){
	
	assert.equal(1,lib.compare_by_length('ab','a'));
};
test.gives_less_than_0_when_2nd_arg_is_larger = function(){
	
	assert.equal(-1,lib.compare_by_length('ab','abc'));
};
test.gives_1_when_1st_arg_is_equall_to_the_second = function(){
	
	assert.equal(true,lib.compare_by_length('ab','ba')<0);
	assert.equal(true,lib.compare_by_length('ba','ab')>0);
};







