var lib={};
exports.lib=lib;
lib.factorial = function(num){
	return  (num<=1)?1:lib.factorial(num-1)*num;
}

lib.readBinary = function(num){
 	return  parseInt( num, 2);
 };