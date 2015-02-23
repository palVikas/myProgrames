var assert = require("assert");
var students = require('./student_data.js').data;
var lib = require('./student_lib.js').lib;	

var test = {};
exports.test = test;

test.arrange_people_by_most_no_of_vowels_in_their_name = function(){
	
	var expected = ['Dolly','Krati','Vikas','Vishnu','Ananthu','Gaurav',
	'Parmatma','Prasanjit','Jaiprakash','Pooja Rani','Pooja Prajapati']
	var ans = lib.sort_by_number_of_vowels_in_name(students).map(function(s){
				return s.name;
	});
	 assert.deepEqual(expected,ans);
};
test.vowel_count_for_Ananthu_is_3=function(){
	assert.equal(3,lib.count_Vowel('Ananthu'));
};
test.A_is_vowel=function(){
	assert.equal(true,lib.is_Vowel('A'));
}
test.gives_1_when_1st_arg_is_larger = function(){
	
	assert.equal(1,lib.compare_by_vowel_count_in_name({name:'ab'},{name:'a'}));
};
test.gives_less_than_0_when_2nd_arg_is_larger = function(){
	
	assert.equal(-1,lib.compare_by_vowel_count_in_name({name:'ab'},{name:'abc'}));
};
test.gives_1_when_1st_arg_is_equall_to_the_second = function(){
	
	assert.equal(true,lib.compare_by_vowel_count_in_name({name:'ab'},{name:'ba'})<0);
	assert.equal(true,lib.compare_by_vowel_count_in_name({name:'ba'},{name:'ab'})>0);
};

//***********************************second test****************************************

test.arrange_states_by_the_number_of_people_in_list=function(){
	var expected = [{state_name:'Delhi',count:1},{state_name:'Kerla',count:1},
	{state_name:'Punjab',count:1},{state_name:'West Bengal',count:1},
	{state_name:'Maharastra',count:2},{state_name:'Uttar pradesh',count:5}];
	var ans = lib.get_states_arrange_by_the_number_of_student(students).map(function(s){
		return {'state_name':s.state_name,'count':s.people.length};
	});
	assert.deepEqual(expected,ans);

};
test.find_all_state_without_repetation=function(){
	var expected=['Maharastra','Uttar pradesh','Delhi','Kerla','West Bengal','Punjab'];
	var ans = lib.get_all_states(students).map(function(s){
		return s.name;
	});
	assert.deepEqual(expected,ans);
};
test.student_from_delhi_is_vishnu=function(){
	var expected = ['Vishnu'];
	var ans = lib.get_student_from_state('Delhi',students).map(function(s){
		return s.name;
	});
	assert.deepEqual(expected,ans);
};
test.number_of_student_from_uttarpradesh_is_5=function(){
	var expected = 5;
	var ans = lib.get_student_from_state('Uttar pradesh',students).length;
	assert.deepEqual(expected,ans)
};
//********************************3rd_test*************************
test.Maharashtra_has_more_people_than_Delhi = function(){
	var ans1 = lib.compare_states_by_peopel_count({state_name:'Maharastra',people:[2,3]},
			{state_name:'Delhi',people:[1]});
	var ans2 = lib.compare_states_by_peopel_count({state_name:'Delhi',people:[1]},
		{state_name:'Maharastra',people:[2,3]});
	assert.equal(1,ans1);
	assert.equal(-1,ans2);

};
test.Delhi_is_listed_before_West_bengol = function(){
	var ans1 = lib.compare_states_by_peopel_count({state_name:'West Bengal',people:[1]},
		{state_name:'Delhi',people:[1]});
	var ans2 = lib.compare_states_by_peopel_count({state_name:'Delhi',people:[1]},
		{state_name:'West Bengal',people:[1]});
	assert.equal(1,ans1);
	assert.equal(-1,ans2);
};
test.Maharashtra_is_in_list_of_states_which_produce_Cotton = function(){
	var states = lib.get_states_which_produce_crop('Cotton',
		lib.get_all_states(students));
	var ans = states.map(function(s){return s.name}).indexOf('Maharastra')>=0;
	assert.deepEqual(true,ans);
}

//***************************4th_test//find all people form the states//********************************************




//*****test 5****arrange people by th ratio of vahical to the poputation of th state************










//find total no of vhehical own by people
// find owner of which mobile connection have better chance to have more vehicals
// arrange the state by the no of vhehical
//find how many mob connection of each mobile coonection