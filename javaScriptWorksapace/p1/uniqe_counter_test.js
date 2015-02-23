var uniqcount=function(){
var count=0;
var intercounter=function(){
	
	return count++;
};
return intercounter;
}();
console.log(uniqcount());
unique_counter_start_with=(function(){
	console.log(uniqcount());
	console.log(uniqcount());
})();