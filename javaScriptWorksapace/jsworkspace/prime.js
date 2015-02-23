var x= +process.argv[2]
var count=0;
for(i=1;i<=x;i++)
{
	if(x%i==0)
	{
	
		count=count+1;
	}
	}
	if (count=2)
		console.log("it is a prime number");
	else
		console.log("not a prime number");