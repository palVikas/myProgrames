var r = {};
exports.r = r;
//Dont use for/while/do loops
r.reverseText=function(text){
	return text.split('').reverse().join('');
	}; 

r.fibonacci = function(x){
	var first_number=0;
	var second_number=1;
	var sum=0;
	if(x<0)
		return undefined;
	 if(x==1)
	 	return 0;
	 if(x==2)
	 	return 1;
	 return (r.fibonacci(x-1)+r.fibonacci(x-2));

};
r.reverseWords = function(word){
   var reverse=word.split(' ').map(function(x){return x.split('').reverse().join('')});
   return reverse.join(' ');
};

r.readOctal=function(x){
	 x = x.toString();
	 x = x.split('');
	 var f=1
	 var octalSum=0;
	 toOctal=function(octalSum,reminder){
	 	f=f*8;
	 	octalSum = +octalSum+f*reminder;
	 	return octalSum;
	 } 
	 var changeOctal=x.reduceRight(toOctal);
	 return changeOctal;
};

r.add=function(array){
	var v=array.map(function(x){
		return x+1;
	});
	return v;
};

r.welcome=function(value){
	if(value.length==0)
		return 'seeya';
	if(value.length>0 && value.length<=3)
		return 'seeya'+' '+arguments[0]+'_'+arguments[1];
	};
r.impose=function(arr1,arr2){
	var adding =arr1.map(function(x,i){
		return x+arr2[i];
	})
	return adding;
};
r.findWorstVowelWord=function(word){
	var vowel=[];

}

	.createCircle =function(a,b){ 
		var radius = b;
		 var obj={ get radius(){return radius;},
		  area:function(){ 
		  	return Math.ceil(3.14*radius*radius)
		  	 }(radius),
		   perimeter:function(radius){ 
		   	return Math.ceil(2*radius*3.14);
		   	 }(radius), 
		   moveTo:function(b){ return obj; } };
		    return obj; };

		 
