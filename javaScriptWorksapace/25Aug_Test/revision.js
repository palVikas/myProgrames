var r = {};

//Dont use for/while/do loops

r.reverseText = function(my_string){
	return my_string.split('').reverse().join('');
};

r.reverseWords = function(my_string){
	return my_string.split(' ').map(function(word){
		return word.split('').reverse().join('');
	}).join(' ');
};

r.isVowel = function(character){
	return ['a','e','i','o','u'].indexOf(character.toLowerCase())>=0;
};

r.getVowelCount = function(my_string){
	return my_string.split('').filter(function(character){
		return r.isVowel(character);}).length;
};

r.fibonacci = function(number){
	if(number<0 || Math.ceil(number) != number)
		return;
	if(number == 1)
		return 0;
	else if(number == 2)
		return 1;
	return r.fibonacci(number-1) + r.fibonacci(number-2);
};

r.welcome = function(my_object){
	if(typeof(my_object)=='function')
		return 'call that';
	else if(typeof(my_object)=='object'){
		var str='';
		if(my_object.length == undefined){
				str = 'hi ';
				if(my_object == {}){return 'hi';}
				else{
					Object.keys(my_object).forEach(function(element){ 
					str = str + element+',';	
				});
				return str.slice(0,str.length-1); 
			}
		}
		else{
				str = 'seeya ';
				if(my_object == []){return 'seeya';}
				else{
					my_object.forEach(function(element){ 
					str = str + element+'_';	
				});
				return str.slice(0,str.length-1); 
			}
		}
	}
	else if(my_object == Infinity)
		return 'get out of the world';
	else if(typeof(my_object) == 'boolean')
		return 'to be or not to be';
	return 'hello text';
};

r.findBestVowelWord = function(array){
	var word_lengths = array.map(function(word){return r.getVowelCount(word)});
	return array[word_lengths.indexOf(Math.max.apply(null,word_lengths))];
};

r.add = function(array,increment_value){
	return array.map(function(num){return num + increment_value;});
};

r.impose = function(array1,array2){
	return array1.map(function(num,index){
		if(array2[index] == undefined)
			return num;
		 return num + array2[index];
	});
};

r.readBinary = function(binary_data){
	binary_data = binary_data + '';
	var len = binary_data.length;
	var data = binary_data.split('').map(function(x){
		--len;
		return +x*Math.pow(2,len);
	});
	return data.reduce(function(prev_val,cur_val){return prev_val+cur_val;});
};
r.findWorstVowelWord = function(array){
	var word_lengths = array.map(function(word){return r.getVowelCount(word)});
	return array[word_lengths.indexOf(Math.min.apply(null,word_lengths))];
};

r.tidyText = function(my_string){
	return my_string.split(' ').filter(function(character){
		if(character != '')
			return character;
	}).join(' ');
};

r.readOctal = function(binary_data){
	var len = binary_data.length;
	var data = binary_data.split('').map(function(x){
		--len;
		return +x*Math.pow(8,len);
	});
	return data.reduce(function(prev_val,cur_val){return prev_val+cur_val;});
};
r.factorial = function(num){
	if(num <= 0)
		return 1;
	return num * r.factorial(num - 1);
};
exports.r = r;