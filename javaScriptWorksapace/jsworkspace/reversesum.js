x= +process.argv[2];
sum=0;
var b;
while(x>0)
{
	b= x%10;
	x= (x-b)/10;
	sum=sum+b;
}

console.log(sum);