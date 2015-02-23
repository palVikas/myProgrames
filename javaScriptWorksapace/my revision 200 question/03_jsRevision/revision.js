var r = {};
exports.r = r;
//Dont use for/while/do loops
r.reverseText=function(text){
	return text.split('').reverse().join('');
	}; 

r.fibonacci = function(terms){
	if(terms<0 || terms%1!=0)
		return undefined;
	if(terms==1)
	 	return 0;
	if(terms==2)
	 	return 1;
	return (r.fibonacci(terms-1)+r.fibonacci(terms-2));
};
r.reverseWords = function(word){
                   var reverse=word.split(' ').map(function(charecter){
                   	      return charecter.split('').reverse().join('');
                   	 });
   return reverse.join(' ');
};

r.readOctal=function(x){
	 x=x.toString();
	 x = x.split('');
	 var f=1
	 var octalSum=0;
	var toOctal=function(octalSum,reminder){
	 	f=f*8;
	 	octalSum = +octalSum+f*reminder;
	 	return octalSum;
	 } 
	 var changeOctal=x.reduceRight(toOctal);
	 return changeOctal;
};

r.add=function(array,number){
	var add_number=array.map(function(x){
		return x+number;
	});
	return add_number;
};

r.welcome=function(value,length){
     var array=[];

     if(value === undefined)
		return 'who is it';

     if(value == null)
		return 'oh no';
		if(typeof(value) == 'string' ){
			if(arguments.length==2){
			var responce=function(array,length,value){
				if(length>0)
					  array.push(value)
				if(length==0)
					return array;
			return responce(array,length-1,value)

			};
		responce(array,length,value)
		return array.join('-');
		
	}
		return 'hello text';
	}
	if(typeof(value) == 'boolean')
		return 'to be or not to be';
	if(typeof value == 'object'){
		var ch =' ';
		if(value.length==undefined){
			if(value == {}){return 'hi';}
				else{
						ch = 'hi ';
						Object.keys(value).forEach(function(element){ 
						ch = ch + element+',';	
					});
				return ch.slice(0,ch.length-1); 
				}	

		};
	  ch='seeya ';{
	if(typeof value == []){return 'seeya';}
	else{
		value.forEach(function(a){ch = ch+a+'_';});
	}
	return ch.slice(0,ch.length-1);
	}
	};

	if(value == Infinity)
		return 'get out of the world';

	if(typeof value == 'function')
		return 'call that';
	if(value == parseInt(value))
		 return 'hey count';
		
	if(isFinite(value) == false)
		 	return 'hey dont count';
     return 'hey decimal';
};

r.impose=function(arr1,arr2){
	var adding =arr1.map(function(x,i){
		if (arr2[i] == undefined)
			return x;
		return x+arr2[i];
	});
	return adding;
};

r.is_vowel=function(charecter){
	return ['a','e','i','o','u'].indexOf(charecter.toLowerCase())>=0;
};

r.getVowelCount=function(word){
			return  word.split('').filter(function(charecter){
				return r.is_vowel(charecter)
			}).length;
};

r.get_vowel_count=function(word){
			return  word.split('').filter(function(charecter){
				return r.is_vowel(charecter)
			}).length;
};
r.findWorstVowelWord=function(array){

		var worstVowel=array.map(function(word){
				return r.get_vowel_count(word);
		});
		return array[worstVowel.indexOf(Math.min.apply(null,worstVowel))];
};
r.findBestVowelWord=function(array){
	  var best_vowel = array.map(function(word){
	  		return r.get_vowel_count(word);
	 });
	  return array[best_vowel.indexOf(Math.max.apply(null,best_vowel))];
};

r.changeToOctal=function(x){
	return (parseInt((x).toString(8)))
};

r.changeToHex = function(x){
	return x.toString(16)
};

r.readBinary = function(x){
	return parseInt(x,2);
};

r.readHex=function(x){
	return parseInt(x,16)
};

r.createRectangle=function(point1,point2){
		var length=point2[0]-point1[0];
		var width=point2[1]-point1[1];
		var obj={
		 		length : length,
		 		width  : width,
		 		area : function(){
		 			  return (length*width);
		 		}(length,width),

		 		perimeter : function(){
		 			 return(2*(length+width));
		 		}(length,width),
		 		
		 		moveTo:function(point){
		 			return r.createRectangle(point1,point2);
		 		},
		 		hasPoint:function(point){
		 			return ((length*width)>=(point[0]*point[1]) && (point[0]*point[1])>0)
		 		}
};
	Object.defineProperties(obj,{
			"area": {
			enumerable:true,writable:false,configurable:false
			},
			"perimeter": {
			enumerable:true,writable:false,configurable:false
			 },	 
			"length": {
			enumerable:true,writable:false,configurable:false
			 },
			"width": {
			enumerable:true,writable:false,configurable:false
			}});		 	
 return obj;
 };

r.validatePositiveNumber = function(number){
		if(number<0)
			throw new Error('negative');
		if(number*0 !=0)
			throw new Error('not a number')
		if(number%1 !=0)
			throw new Error('decimal')
};
r.changeToBinary = function(number){
	return Number(number.toString(2));
};

r.tidyText=function(text){
	return text.split(' ').filter(function(word){
		if(word != ' ')
			return word;
	}).join(' ');
};

r.while = function(condition){
	 if(condition()){
	 return {
	 	do:function(incrementCount)
	 {
	 	incrementCount();
	 	r.while(condition).do(incrementCount);
}}};
	return {do:new Function()};

};
 r.calculate_Y = function(start,x2,m){
 	return ((x2-start.x)*m+start.y);
};
r.calculate_X=function(start,y2,m){
	return (((y2-start.y)*1/m)+start.x);
}

r.Line = function(start,end){
    var len=Math.sqrt(Math.pow(end.x-start.x,2)+Math.pow(end.y-start.y,2)); 
      Object.defineProperty(this,"length",{value:len,enumerable:false,writable:false,configurable:false});
      this.start=start;
      this.end=end;
    var m=(end.y-start.y)/(end.x-start.x);
    var value_Of_Y = function(x2){
    	if(x2<start.x || x2>end.x)
    		return null;
    	return r.calculate_Y(start,x2,m);
    };
    var value_of_X=function(y2){
    	if(y2<start.y || y2>end.y)
    		return null;
    	return r.calculate_X(start,y2,m);
    };
    this.findX=value_of_X;

    this.toString=function(){return('[Line from '+start.x+','+start.y+' to '+end.x+','+end.y+']')};

    this.findY=value_Of_Y;

    this.isParallelTo=function(obj){ 
 	      var m1=((end.y-start.y)/(end.x-start.x))
 	  	  var m2=((obj.end.y-obj.start.y)/(obj.end.x-obj.start.x))
 	  	  var d1=Math.sqrt(Math.pow((end.x-start.x),2)+Math.pow((end.y-start.y),2)); 
 	      var d2=Math.sqrt(Math.pow((obj.end.x-obj.start.x),2)+Math.pow((obj.end.y-obj.start.y),2)); 
  	 	        return (m1==m2 && d1==d2)
 };
 	this.findPointFromStart=function(distance){
 	 	var point={};
 	 	point.x=(distance*(end.x-start.x)/len);
 	 	point.y=(distance*(end.y-start.y)/len);
 	 	return point;
 	 };
 	this.findPointFromEnd=function(distance){
    var point={};
 	 	point.x=(end.x-(distance*(end.x-start.x)/len));
 	 	point.y=(end.y-(distance*(end.y-start.y)/len));
 	 	return point;
 	 };
 	 this.hasPoint = function(obj){
 	 	return ((obj.y)==(m*obj.x))
};
 	 this.isEqualTo = function(x){
 	 	return this.toString()==x.toString();
 	 };
 	 
 	 this.split = function(){
 	 	var splitPoint = [];
 	 	var midPoint = {x:(end.x-start.x)/2,y:(end.y-start.y)/2}
 	 	var firstPiece = new r.Line(start,midPoint);
 	 	var secondPiece = new r.Line(midPoint,end);
 	 	splitPoint.push(firstPiece,secondPiece);
 	 		return splitPoint
 	 }; 	 	
 	Object.defineProperties(this,{"hasPoint": { enumerable:false },
								"isEqualTo" : { enumerable:false },
									"split" : { enumerable:false },
						"findPointFromStart": { enumerable:false },
							  "isParallelTo": { enumerable:false },
								 "toString" : { enumerable:false },
								    "findY" : { enumerable:false },
									"findX" : { enumerable:false },
						 "findPointFromEnd" : { enumerable:false }
			}); 	 
};

r.if=function(value){
  var obj= {
		    only_then:function(chek){
		if(value==true && typeof(chek)=='function')
			return chek();
				return false;
	},
	 	 then:function(value1){
	 		return {
	 			else:function(value2){
	 					if(typeof(value)!='function'){

	 						if(value==true){
	 							if(typeof(value1)=='function')
	 								return value1();
	 							return value1;
	 						}
	 						if(typeof(value2)=='function')
	 	  						return value2();
	 						return value2;
	 			}
	 			if(value()==true){
	 				if(typeof(value1)=='function'){
	 					return value1();
	 				}
	 				return value1;
	 			}
	 			if(typeof(value2)=='function'){
	 				return value2();
	 			}
	 			return value2;
	 		}
	 
	 }
	 			
   }
};
 return obj;
};

	
r.switch=function(func,order){
	if(typeof(func)=='function')
	order[func()]();
   if(typeof(func)=='number')
	return order[func]();
if(typeof(func)=='string')
	 return order[func]();
}

r.Point=function(x,y){
	this.x=x;
	this.y=y;
	this.isOn=function(circle){
		   if(circle.radius==undefined)
		   	return circle.hasPoint(this);

 			 if(circle.radius == Math.sqrt(Math.pow(this.x,2) +Math.pow(this.y,2)))
 				return true;
 			else
 				return false;
 		},
 	this.toString=function(){return ('[Point @x:'+this.x+',y:'+this.y+']')};
      this.compareDistance=function(args1,args2){
      	var d1=Math.sqrt(Math.pow((x-args1.x),2)+(Math.pow((y-args1.y),2)));
      	var d2=Math.sqrt(Math.pow((x-args2.x),2)+(Math.pow((y-args2.y),2)));
      	 return d1 - d2;
      },

 	this.isEqualTo=function(newpoint){
 		if(this.x.toFixed(3) == newpoint.x.toFixed(3) && this.y ==newpoint.y) 
 			return true
 		  return false;
 	  }
 		Object.defineProperty(this,"isOn",{enumerable:false,writable:false})
 		Object.defineProperty(this,"isEqualTo",{enumerable:false,writable:false})
  		 Object.defineProperty(this,"toString",{enumerable:false,writable:false})
         Object.defineProperty(this,"compareDistance",{enumerable:false,writable:false})
          Object.defineProperty(this,"x",{enumerable:true,writable:false})
         Object.defineProperty(this,"y",{enumerable:true,writable:false})
   
      
 
};
r.distance_of_point=function(
	centre,obj){
		return (Math.sqrt(Math.pow((obj.x-centre.centre.x),2))+Math.pow((obj.y-centre.centre.y),2))
}
 r.is={
 	  the_point_on:function(circle_point){
 	  	return function(point){
 	  		return circle_point.hasPoint(point)}
 	  	},
        greater_than_previous_number:function(pv,cv){
         return pv > cv; 
   }
};

r.to = {
	    day:function(date){ 
		 var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		 var date_day = new Date(date).getDay();
		  return days[date_day];
		 },
		 round_25_paise : function(money){
		 	var new_money=money.toFixed(2);
		 	var decimal_money=new_money-Math.floor(new_money);
		 	var remainder_money=(decimal_money%0.25);
		 	var number=Math.floor(decimal_money/0.25);
		 	if(remainder_money>=0.13)
		 		return (Math.floor(new_money)+(number*0.25)+0.25)
		 	return Math.floor(new_money)+(number*0.25)
		 },
		 nextDay:function(date){
		 	var dateInArray = date.split('-').toString();
		 	var nextdate = new Date(dateInArray);
		 	 nextdate.setDate(2+nextdate.getDate());
		 	var expectedAns = nextdate.toISOString().split('T');
		 	return expectedAns[0];
		 	 
		 }
};
r.Circle=function(centre,radius){
         this.centre=centre;
	     this.radius=radius;

 		this.area=function(){
 			return Math.ceil(3.14*radius*radius);
 		}(radius),
 		this.perimeter=function(){
 			return Math.ceil(2*3.14*radius);
 		}(radius),
 		this.moveTo=function(newcenter){return new r.Circle(newcenter,this.radius)};
 		 		this.covers=function(newcentre){
 			if(radius > Math.sqrt(Math.pow(centre.x - newcentre.x,2) + Math.pow(centre.y - newcentre.y,2)))
 				return true;
 			else
 				return false;
 			};

 		this.hasPoint=function(point){
 			if(radius == Math.sqrt(Math.pow(point.x,2) +Math.pow(point.y,2)))
 				return r.Point;
 			else
 				return false;
 	};
 	this.overlaps=function(point){
 	 return  (this.centre.x==point.centre.x && this.centre.y==point.centre.y || this.radius==point.radius)
  }
 	this.toString=function(){return ('[Circle @'+centre.x+','+centre.y+' radius:'+radius+']')};
	Object.defineProperties(this,{
	                              "centre": {
  	                                             enumerable:true,writable:false,configurable:false
                                             },
								   "radius": {
  											     enumerable:true,writable:false,configurable:false
   											 },
  								   "covers": {
											    enumerable:false,writable:false,configurable:false
											  },
								  "hasPoint": {
								                enumerable:false,writable:false,configurable:false
								              },
								  "toString": {
								  	            enumerable:false,writable:false,configurable:false
								              },
								  "moveTo":   {
								  	            enumerable:false,writable:false,configurable:false
								              },
								    "area":   {
								  	            enumerable:false,writable:false,configurable:false
								              },
								  "perimeter":{
								  	            enumerable:false,writable:false,configurable:false
								               },
								  "overlaps":  {
								  	             enumerable:false,writable:false,configurable:false
								               }
                                               });
};

r.resizeArray = function(array,length,parent){

	     if(array.length==undefined || length==undefined)
		       return array;
		   if(parent==undefined){
		   	array.length=length;
		   	return array;

		   }
		  
		if(array.length>length){
			 array.forEach(function(x){
			 	if(length<array.length)
			 		array.pop();
			 });
		 }
		 else if(array.length<length){
		 	  array.forEach(function(x){
			 	if(length<array.length)
			 		if(parent != undefined)
			 		array.push(parent);

			 });
		 }

		var recursion=function(array,length){
			if(array.length==length)
				return array;
			array.push(JSON.parse(JSON.stringify(parent)));
			recursion(array,length);
	 	}
		recursion(array,length);
		return array;

};

r.do = function(increment){
	var obj={
	   while:function(condition){
	   	increment();
		if(condition())
		r.do(increment).while(condition)
	 },
	 unless:function(condition){
	 	if(condition()==false)
	 	r.do(increment()) ;
	 },
	 until:function(condition){
	 	increment();
	 	if(!condition())
	 		r.do(increment).until(condition);
	 },
	 if:function(condition){
	 	if(condition())
	 		increment();
      }
  }
  return obj;

}
r.init_Value=function(init){
	  init();
	  return function(){
	  	return ;
	  }
};

r.for=function(init,check,next){
	var initialize=r.init_Value(init);
	if(check())
	{
		return {do:function(action){
			action();
			next();
			r.for(initialize,check,next).do(action);
		}
	};
	}
	return {do:new Function()};
};
r.what_are_these = function(a,b,c,d){
    var obj={};
    var str="";
    Array.prototype.forEach.call(arguments,function(x){Object.defineProperty(obj,""+x,{enumerable:true});});
    Object .keys(obj).forEach(function(x){str +=x+' | '});
    return str.slice(0,str.length-3);
};

r.createNewArray=function(size,object){
	var array=[];
	
	if(size == undefined)
		return array;
	if(object != undefined){
		var object1=JSON.stringify(object);
		var object2=JSON.parse(object1);
		var recursion=function(array,size){
			if(array.length==size)
				return array;
			array.push(object2);
			recursion(array,size);
	 	}
		recursion(array,size);
		return array;	  
	};
	array=new Array(size)
	return array;
}
//********************************r.range************************************************
r.range=function(start,end,incr){
	var result=[];
	if(incr == undefined){
		var recursion=function(){
		if(start>=end)
			return result;
		result.push(start);
		start = start+1;
		recursion((start+1),end)
	}
	recursion(start,end);
	return result;

	}
	var recursion=function(){
		if(start>=end)
			return result;
		result.push(start);
		start = start+incr;
		recursion((start+incr),end,incr)
	}
	recursion(start,end,incr);
	return result;
};
//************************************r.factor*******************************************
r.factors = function(number){
	var array=[];
	var i=1;
	var recursion=function(){ 
	if(i==number){
		array.push(i);
		return array;
		}
	if(number%i==0)
		array.push(i);
	i++;
	recursion(number)
	}
	recursion(number);
	return array;
};
r.until=function(condition){
	if(condition() == false){
		return{
		 do:function(incrementCount){
			incrementCount();
			(r.until(condition).do(incrementCount));
		}
	}
}
      return {do: new Function()};
  };

r.decodeList=function(text){
	if(typeof(text)=='string'){
	return text.split('').reverse().join('');
}		
return text.map(function(word){
	return word.split('').reverse().join('')
}).reverse().join(' ');
	}; 
//**************************************r.factoraial*******************************	
r.factorial=function(number){
	if(number<=1)
		return 1;
	return number*r.factorial(number-1); 
};
//***************************complex_number*******************************************//
r.Complex=function(x,y){
	
		this.x = x;
		this.y = y;
		this.toString=function(){
			if(y<0)
			return (x+''+y+'i');	
			return (x+'+'+y+'i');
		};
		this['+'] = function(b){
			return   new r.Complex((this.x+b.x),(this.y+b.y))
		};
	
		this['-'] =function(b){
			return   new r.Complex((this.x-b.x),(this.y-b.y))
			
		};
		this['*'] = function(point){
			return new r.Complex((this.x*point.x)+(this.y*point.y*(-1)),((this.y*point.x)+(this.x*point.y)))
		};
		this.isEqualTo = function(new_complex){
		return	JSON.stringify(this) == JSON.stringify(new_complex)	
		};
		Object.defineProperties(this,{
			"x": {
  	enumerable:true,writable:false,configurable:false
    },
    "y": {
  	enumerable:true,writable:false,configurable:false
    },
	"isEqualTo": {
  	enumerable:false,writable:false,configurable:false
    },
	"*": {
  	enumerable:false,writable:false,configurable:false
    },
  "-": {
  	enumerable:false,writable:false,configurable:false
    },
  "+": {
       enumerable:false,writable:false,configurable:false
  },
  "toString":{
  	enumerable:false
  }});
	};

//**************************************r.compare*****************************************//
r.distance=function(point){
	return (Math.sqrt(Math.pow((point.x-0),2)+Math.pow((point.y-0),2)));
}
r.compare={
			strings:function(str1,str2){
				   return (r.get_vowel_count(str1).length-r.get_vowel_count(str2).length||(str1>str2)?1:-1)
			},
			points:function(point1,point2){
				
				return r.distance(point1)-r.distance(point2);
			},
			numbers:function(num1,num2){
				return num1 - num2;
			},
			circles:function(circle1,circle2){
				return (circle1.radius-circle2.radius);
			},
			short_strings:function(text,str){
				return str.length - text.length;
			},
			strings_by_vowel_count:function(str1,str2){
				return r.getVowelCount(str1)-r.getVowelCount(str2);

			},
			numbers_descending:function(num1,num2){
				return num2-num1;
			},
			numbers_by_total_factors:function(num1,num2){
				return r.factors(num1).length-r.factors(num2).length;
			},
			strings_by_length : function(word1,word2){
				return word1.length - word2.length;
			},
			numbers_odd_even:function(num1,num2){
				if(num1%2!=num2%2)
					return num2;
				return num1-num2;
			}

};
			
	
//*****************************************r.finder*****************************************************************

r.finder = function(func){
	var array =[];
	if(func==undefined){
		func = r.compare.strings_by_length;
	}
	var find = function(str){
	array.push(''+str);
	var result = array.reduce(function(x,y){
		if(func(x,y)>=0)
			return x;
		return y;
		})
		return result; 
	}
	return find;	
};
r.Set=function(){
	   var a = {};
        var array = Array.prototype.slice.call(arguments,0);
                    array.forEach(function(x){
         	       Object.defineProperty(a,x,{enumerable:true});
                  });
       a.union = function(obj){
                              var all_value=Object.keys(this).concat(Object.keys(obj))
                               return  r.Set.apply(null,all_value);
                               	
	                        }
	   a.isEqualTo = function(obj){
		                          return Object.keys(this)==Object.keys(obj).toString(); 
	                             };
	   a.intersection = function(obj){
	   	                            var array1 = Object.keys(obj);
	   	                            var array2 = Object.keys(this);
	   	                            var comon_value = array1.filter(function(x){
	   	                            	      return (array2.indexOf(x)>=0)
	   	                            });
	   	                             return r.Set.apply(null,comon_value);
                                    };
        a.toString=function(){
        	return "Set{"+array.join("; ")+"}";
        }

	    a.cardinality=function(){
		                          var newarray=[];
									array.forEach(function(x){
										if(newarray.indexOf(x)<0)
											newarray.push(x);
									    })
									return newarray.length;
							}();
	Object.defineProperties(a,{
		                         "union": {
  	                                             enumerable:false
                                             },
                                  "isEqualTo": {
  	                                             enumerable:false
                                             },
                                   "cardinality": {
  	                                             enumerable:false
                                             },
                                    "intersection": {
  	                                             enumerable:false
                                             }, 
                                      "toString": {
  	                                             enumerable:false
                                             },         
	});	
	return a;						
};
	
r.Sets={
    phi: new r.Set()
};

r.sumOfDigits=function(digit){
	 var sum=0
	var recursion =function(digit){
		if(digit<=0)
		return sum;
	  var digi=digit%10;
	  sum=sum+digi;
		digit=Math.floor(digit/10);
		return recursion(digit)
    }
    recursion(digit)
    return sum;
};

r.calculate=function(number){
	return eval(number).toString();
};


//******************************************************r.templets************************************************
r.Template = function(text){

		this.apply=function(obj){
		    var new_text=text;
		   var keys=Object.keys(obj);
		   keys.forEach(function(key){new_text=replaceAll(key,obj[key],new_text)});
		   return new_text;
	    }
	   Object.defineProperty(this,"apply",{enumerable:false});
}
var replaceAll=function(find,replace,str){
	return str.replace(new RegExp(find,'g'),replace);

};
//***********************************************r.operate**********************************************	

r.operate=function(acc,func,value){
	   var array=Array.prototype.slice.call(arguments,2);
	    if(acc.length!=undefined){
	    	return acc[func].apply(null,array);
	    }
	     if(arguments.length>2){
	     	if(typeof(func)=='string'){
	     		return acc[func].apply(acc,array)
	     	}
	      return  func.apply(acc,array);
	  }
	  return func.apply(acc);
};
r.accumulator =	function(value){
	if(value == undefined)
		 this.value= 0;
	else	
		this.value=value;
	this.add=function(){
		var array=Array.prototype.slice.call(arguments,0);
		this.value=this.value+array.reduce(function(x,y){return x+y;});
	}
	 this.remove=function(){
	 	var array=Array.prototype.slice.call(arguments,0);
	 	this.value=this.value-array.reduce(function(x,y){return x+y});

	 }
	 this.getValue=function(){
	 	return this.value;
	 }
	
};




