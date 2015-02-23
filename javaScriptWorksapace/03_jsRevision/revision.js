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
	if(my_object == null)
		return 'oh no';
	else if(typeof(my_object) =='function')
		return 'call that';
	else if(typeof(my_object) == 'string')
		return 'hello text';
	else if(typeof(my_object)=='object'){
			var str='';
			if(my_object.length == undefined){
				if(my_object == {}){return 'hi';}
				else{
						str = 'hi ';
						Object.keys(my_object).forEach(function(element){ 
						str = str + element+',';	
					});
				return str.slice(0,str.length-1); 
				}	
			}
		else{
				if(my_object == []){return 'seeya';}
				else{
						str = 'seeya ';
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
	else if(typeof(my_object) == 'number')
		 if(isFinite(my_object) == false)
		 	return 'hey dont count';
		return 'hey count';
	
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
	return data.reduce(function(prev_val,cur_val){return prev_val + cur_val;});
};

 r.__proto__.factorial = function(num){
	if(num <= 0)
		return 1;
	return num * factorial(num - 1);
};

r.getArrayRange = function(start,end,arr){
	if(start<end){
		arr.push(start);
		return r.getArrayRange(start+1,end,arr);
	}
};

r.range = function(start,end){
	var arr = [];
	r.getArrayRange(start,end,arr);	
	return arr;
};

r.calculate = function(expression){
	return eval(expression).toString();
};

r.octal_to_binary = function(value,base,array){
	if(value >= base){
		array.push(value % base);
		r.octal_to_binary(Math.floor(value / base),base,array);
		
	}
};

r.changeToOctal = function(octal_value){
	var array = [];
	r.octal_to_binary(octal_value,8,array);
	array.push(1);	
	return Number(array.join(''));
};

r.circleArea = function(radi){
	return Math.round(3.14 * +radi * +radi);
};

r.circlePerimeter = function(radi){
	return Math.round(2*3.14* +radi);
};
r.checkPoint = function(x,y,Xc,Yc,radius){
	return Math.pow(x-Xc,2) + Math.pow(y-Xc,2) <= Math.pow(radius,2);
};

r.createCircle = function(center,radi){
	return Object.freeze({
				radius:radi,
				hasPoint:function(cent){
						return r.checkPoint(cent[0],cent[1],center[0],center[1],radi);},
				area:r.circleArea(radi),
				perimeter:r.circlePerimeter(radi),
				moveTo:function(new_center){
					var my_center = new_center;
					return {
								radius:radi,
								hasPoint:function(cent){
										return r.checkPoint(cent[0],cent[1],my_center[0],my_center[1],radi);},
								area:r.circleArea(radi),
								perimeter:r.circlePerimeter(radi)
							};
				}
			});
};

r.validatePositiveNumber = function(number){
	var expectedError;
	if(number*0 != 0)
		expectedError = "Not a number";
};

r.rectArea = function(length,width){
	return length * width;
};

r.rectPerimeter = function(length,width){
	return 2*(length+width);
};

r.checkRectPoint = function(points,dimensions,given_point){
	return ((points[0]<=given_point[0]) && (given_point[0]<=dimensions[0])) && ((points[1]<=given_point[1]) && (given_point[1]<=dimensions[1]));
};

r.createRectangle = function(points,dimensions){
	return Object.freeze({
				length:dimensions[0],
				width:dimensions[1],
				hasPoint:function(given_point){
						return r.checkRectPoint(points,dimensions,given_point);},
				area:r.rectArea(dimensions[0],dimensions[1]),
				perimeter:r.rectPerimeter(dimensions[0],dimensions[1]),
				moveTo:function(co_ord){
						var my_cord = co_ord;
						return{	
								length:dimensions[0],
								width:dimensions[1],
								hasPoint:function(given_point){
								return r.checkRectPoint(points,dimensions,given_point);},
								area:r.rectArea(dimensions[0],dimensions[1]),
								perimeter:r.rectPerimeter(dimensions[0],dimensions[1])
							};
				}	
			});
};

r.changeToHex = function(number){
	return (number).toString(16);
};

r.readOctal = function(binary){
	return parseInt(binary,8);
}

r.changeToBinary = function(number){
	return Number((number).toString(2));
};

r.if = function(bool,value1,value2){
	var my_value1,my_value2;
	if(typeof(value1) == 'function')
			my_value1 = value1();
	if(typeof(value2) == 'function')
			my_value2 = value2();
	else{
			my_value1 = value1;
			my_value2 = value2;
		}
		return bool == true ? my_value1 : my_value2;
};

r.decode = function(array){
	return array.map(function(text){
									return text.split('').reverse().join('');
								}).reverse().join(' ');
};

r.decodeList = function(my_obj){
	if(toString.call(my_obj) == '[object String]')
			return r.decode(my_obj.split(' '));
	else if(toString.call(my_obj) == '[object Array]')
			return r.decode(my_obj);
};

r.do = function(condition,action){
	if(condition()){
		action();
		r.do(condition,action);
	}
	else
		return;
};
	
r.calculateSlope = function(point1,point2){
	return ((point2[1] - point1[1]) / (point2[0] - point1[0]));
};

r.calculateX = function(point1,y2,slope){
	return ((y2 - point1[1]) /slope) + point1[0];
};

r.createLine = function(point1,point2){
	var slope = r.calculateSlope(point1,point2);
	return {
			findX:function(y2){
					if(y2<point1[1] || y2>point2[1])
						return null;
					return r.calculateX(point1,y2,slope)}
		};
};

r.while = function(condition){
 	return	condition();
};

r.Circle=function(centre,radius){
	var obj =  new String('[circle @'+centre.x+','+centre.y+'radius :'+radius+']')
	return obj;
}
r.for=function(init,condition,updation,newcondition){
	newcondition ? true:init();
	if(condition()){
		return {
			do:function(action){
				action();
				updation();
				r.for(init,condition,updation,true).do(action);
			}
		}
	}
	return {do:new Function()};
}
		
	

exports.r = r;