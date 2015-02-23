var string=process.argv[2];
console.log(string);
//var vowel=function(str){
	var arrstr=string.split('');
	var count=0;
	arrstr.filter(function(x){
		if(x=='a'||x=='A'||x=='e'||x=='E'||x=='i'||x=='I'||x=='o'||x=='O'||x=='u'||x=='U')
			count=count+1;
		return count;
	})
	console.log(count)