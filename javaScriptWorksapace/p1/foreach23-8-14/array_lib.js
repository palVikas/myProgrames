// var lib = {};
// exports.lib = lib;
// lib.length_in_given_array = function(obj){
// 	var length1 = function(a){
// 		return a.length = a.color.length;
// 	};
// 	   obj.forEach(length1);
// 	   return obj;
// };
// // *************************************second********************************************
// lib.gretest_length_of_the_object=function(obj){
// 	var array=[];
// 	var longest_object=obj.shift();
// 	 obj.forEach(function(a){
// 		longest_object= (a.color.length>longest_object.color.length)?a:longest_object;
// 	});
// 	array.push(longest_object);
// 	return array;
// 	};

// 	// ***********************************third*******************************
// lib.count_Vowel = function(object){

// 	var text = object.color;
//  	 var count = text.split('').filter(function(c){
//  		return ['a','e','i','o','u'].indexOf(c.toLowerCase())>=0;
//  	}).length;
//  	return count;	 
//  };
 
//  lib.sumof_the_vowel =function(x){
//  	var sum=0
//  	x.forEach(function(x){
//  		sum+=lib.count_Vowel(x);
//  	})
//  	return sum;
//  };	
var x=['ram','shyam','work','hiii'];
findBestVowelWord=function(array){

	array.map(function(word){
		var vowel_count=function(word){
			 var count=word.split('').filter(function(charecter){
				return ['a','e','i','o','u'].Indexof(charecter.toLowerCase())>=0;
			}).length;
			 return count;
			 console.log(count);
		}
	})
}