var r = {};
exports.r = r;

 r.fibonacci = function(term){
 	if(term <= 0 || term%1 != 0)
 		return undefined;
 	if(term == 1)
 		return 0;
 	return(term == 2)?1:(r.fibonacci(term-1)+ r.fibonacci(term-2));
 };

 r.readBinary = function(num){
 	return  parseInt( num, 2);
 };
 r.readOctal = function(num){
 	return parseInt(num,8);
 }
 r.reverseText = function(text){
 	return text.split('').reverse().join('');
 };

var isVowel = function(charecter){
	return ['a','e','i','o','u'].indexOf(charecter.toLowerCase())>=0;
};

 r.getVowelCount = function(text){
 	var noOfVowel = text.split('').filter(function(charecter){
 			return isVowel(charecter);
 	}).length;
 	return noOfVowel;
 };

 r.tidyText = function(text){
 	return text.split(' ').filter(function(word){
 		if(word!='')
 			return word;
 	}).join(' ');
 };

r.reverseWords = function(text){
	return text.split(' ').map(function(word){
			return r.reverseText(word);
		}).join(' ');
};

r.factorial = function(number){
	return (number == 0)?1:number*r.factorial(number-1);
};

r.changeToBinary = function(number){
	return parseInt(number.toString(2));
};

r.changeToOctal = function(number){
	return parseInt(number.toString(8));
};

r.changeToHex = function(number){
	return number.toString(16);
};

r.readHex = function(number){
	return parseInt(number,16)
};
r.impose = function(collOfNum1,collOfNum2){
	return collOfNum1.map(function(num,index){
		return (!collOfNum2[index]) && num || num+collOfNum2[index];
	});
};

r.findBestVowelWord = function(collOfWords){
	var bestVowelWord = collOfWords.map(function(words){
		return r.getVowelCount(words);
	});
	return collOfWords[bestVowelWord.indexOf(Math.max.apply(null,bestVowelWord))];
}
r.findWorstVowelWord = function(collOfWords){
	var worstVowelWord = collOfWords.map(function(words){
		return r.getVowelCount(words);
	});
	return collOfWords[worstVowelWord.indexOf(Math.min.apply(null,worstVowelWord))];
};

r.range = function(start,end,range){
	var numberInRange = [];
	var range = (!range) && 1 || range;
	var rec = function(){
		if(start>=end)
			return start;
		numberInRange.push(start)
		start = start+range;
		return rec(start+range,end)
		}
	rec(start,end);
	return numberInRange;
};

r.add = function(collOfNum,increment){
	return collOfNum.map(function(num){
		return num+increment;
	});
};

r.calculate = function(number) {
	return eval(number).toString();
};

r.validatePositiveNumber = function(number) {
	if(number*0 !=0)
		throw new Error('not a number');
	if(number<0)
		throw new Error("negative");
	if(number%1 !=0)
		throw new Error("decimal");
};

r.decodeList = function(list) {
	return (Array.isArray(list)) && r.reverseText(list.join(' ')) || r.reverseText(list);
};



r.createRectangle = function(point1,point2) {
	 var a = {};
	 a.length = point2[0]-point1[0];
	 a.width = point2[1]-point1[1];
	 a.area = a.length*a.width;
	 a.perimeter = 2*(a.length+a.width);
	 a.hasPoint = function(point){
		 return (a.area >= point[1]*point[0]) && (point[1]*point[0]> 0);
	 };
	 a.moveTo = function(point){
	 		return r.createRectangle(point1,point2);
	 }

	 Object.keys(a).forEach(function(key){
	 		Object.defineProperty(a,key,{value:a[key],writable:false})
	 })
	return a;
};


r.Circle = function(centre,radius) {
	this.radius = radius;
	this.centre = centre;
	this.area = this.area();
	this.perimeter = this.perimeter();
	Object.keys(this).forEach(function(key){
	 		Object.defineProperty(this,key,{value:this.key,writable:false,enumerable:false})
	 })
};

r.Circle.prototype = {
	area : function(){return Math.ceil(3.14*this.radius*this.radius)},
	perimeter : function(){return Math.ceil(2*3.14*this.radius)}
}