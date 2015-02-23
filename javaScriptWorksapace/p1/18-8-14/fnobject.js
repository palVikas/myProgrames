var myfun=function()
{
	var college={
		name:'simt',
		address:'Lucknow'
	}
	return college;
}


var change=function(){
	var mycollege=myfun();
	//delete mycollege.name;
	//var college=myfun();
	mycollege.name='goro';
console.log('mycollege.name',mycollege.name);
//console.log('college.name',college.name);
}
change();
var Lucknow=function(){
	var college=myfun();
	console.log(college.name)
}
Lucknow()