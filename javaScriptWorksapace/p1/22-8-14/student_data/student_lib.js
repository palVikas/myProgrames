
var lib = {};
exports.lib = lib;

 lib.compare_by_vowel_count_in_name=function(s1,s2){
 	return lib.count_Vowel(s1.name)-lib.count_Vowel(s2.name)||
 		(s1.name>s2.name?1:-1);
 }
lib.sort_by_number_of_vowels_in_name = function(students){
    return students.sort(lib.compare_by_vowel_count_in_name);	
};
lib.is_Vowel = function(c){
	return ['a','e','i','o','u'].indexOf(c.toLowerCase())>=0;
};
 lib.count_Vowel = function(text){
 	return text.split('').filter(lib.is_Vowel).length;	 
 };
 lib.get_all_states = function(students){
 	var  states = [];
 	
 	students.forEach(function(s){
 		var find_repeated = function(st){
 		 	return st.name == s.state;
 		}
 		if(states.filter(find_repeated).length <= 0){
 			var state = {name:s.state,capital:s.capital,
 				population:s.population,main_crop:s.main_crop};
 			states.push(state);
 		}
 	});

 		return states;
 };
lib.get_student_from_state = function(state,students){
	return students.filter(function(s){
		return s.state == state;
	});  
};
lib.get_states_arrange_by_the_number_of_student = function(students){
	var states_with_thier_peopel = lib.get_all_states(students).map(function(state){
		var studs = lib.get_student_from_state(state.name,students);
		return {'state_name':state.name,'people':studs}
	});
	return states_with_thier_peopel.sort(lib.compare_states_by_peopel_count);
}
lib.compare_states_by_peopel_count=function(s1,s2){
	return  s1.people.length-s2.people.length||(s1.state_name>s2.state_name?1:-1);
}
lib.get_states_which_produce_crop=function(crop,states){
		return states.filter(function(s){return	s.main_crop == crop;});
}

//arrange people by most no of vowels in their name
//arrange states by the number of people in list
//find states which produce x
//find all people form the states
//arrange people by th ratio of vaical to the poputation of th state
//find total no of vhehical own by people
// find owner of which mobile connection have better chance to have more vehicals
// arrange the state by the no of vhehical
//find how many mob connection of each mobile coonection
