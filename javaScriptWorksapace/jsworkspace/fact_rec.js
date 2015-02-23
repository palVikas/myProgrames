var x= +process.argv[2]

function fact(x)
{
	if (x==0)
		return 1;
	var f= x*fact(x-1);
	return f;
}
console.log(fact(x));


