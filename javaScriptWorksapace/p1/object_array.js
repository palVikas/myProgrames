var student={name:'vikas',section:'b',rollno:'453627',mb_no:'61272871989'};
console.log(student);
var arr=Object.keys(student);
console.log(arr);
var sarr=arr.sort();
console.log(sarr);
sarr.forEach(function(x){
	return console.log(x,':',student[x])
})
var sstude=JSON.stringify(student)
console.log(sstude);
var len=sstude.length;
console.log(len);
var sstud=JSON.parse(sstude);
console.log(sstud);



var x=function(){
	return 56;
}
console.log(x());