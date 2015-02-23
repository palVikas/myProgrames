test.for_simulates_the_for_loop = function (){
	var i,text='';
	var items = [];
	var init = function(){i=0};
	var check = function(){return i<5};
	var next = function(){i++};
	var action = function(){text +='a'};KH
	var anotherAction = function(){items.unshift(i)};
	r.for(init,check,next).do(action);
	assert.equal(text,'aaaaa');
	r.for(init,check,next).do(anotherAction);
	assert.deepEqual(items,[4,3,2,1,0]);
};
test.circle_is_represented_by_radius_and_centre = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.equal(a,'[circle @0,0 radius:7]');
};
test.circle_is_represented_by_radius_and_centre = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.equal(a,'[Circle @0,0 radius:7]');
};
var lines=[]; 
var lengthofx = end.x - start.x;
 var lengthofy = end.y - start.y; 
 this.length = function(){ 
 	var d = Math.sqrt(Math.pow(lengthofx,2)+Math.pow(lengthofy,2));
 	 return Math.floor(d); }(), 
 	 this.isParallelTo=function(x){ 
 	 	var d1=Math.pow((end.x-start.x),2); 
 	 	var d2=Math.pow((end.y-start.y),2); 
 	 	if(d1==d2) 
 	 		return true; 
 	 	return false; },
 	 	 this.findX=function(a){ 
 	 	 	if(a>end.y || a<start.y) 
 	 	 		return null;
 	 	 		 return (end.x - start.x)*a/(end.y - start.y); },
 	 	 this.findPointFromEnd=function(dist){ 
 	 	 	var obj={}; 
 	 	 	obj.x = lengthofx - (dist*lengthofx/Math.sqrt(lengthofx*lengthofx + lengthofy*lengthofy));
 	 	 	 obj.y = lengthofy - (dist*lengthofy/Math.sqrt(lengthofx*lengthofx + lengthofy*lengthofy));
 	 	 	  return obj; } };



 	 	 	  test.if_evaluates_respective_values = function (){
	var good = function(){return 'good';};
	var bad = function(){return 'bad';};	
	assert.equal('good',r.if(true).then(good).else(bad));
	assert.equal('bad',r.if(false).then(good).else(bad));	
};

test.what_are_these_gives_the_representation_of_items = function (){
	var a = new r.Point(1,2), b = new r.Point(3,4), c = new r.Circle(a,7);
	var d = new r.Line(a,b);	
	var text = '[Point @x:1,y:2] | [Point @x:3,y:4] | [Circle @1,2 radius:7] | [Line from 1,2 to 3,4]';
	assert.equal(r.what_are_these(a,b,c,d),text);
	assert.equal(r.what_are_these(d,c),'[Line from 1,2 to 3,4] | [Circle @1,2 radius:7]');
	assert.equal(r.what_are_these(1,'hello',2.5),'1 | hello | 2.5');
};