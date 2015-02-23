x =+process.argv[2]
rev=0;
while (x>0){
	b=x%10;
	x=(x-b)/10;
	rev=(rev*10)+b;
}
console.log(rev);