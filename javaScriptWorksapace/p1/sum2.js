sum=0
for(i=2;i<process.argv.length;i++)
{
if(+process.argv>10)
sum=sum+ +process.argv[i]
}
console.log(sum)
