var rupees = process.argv[2];
var notes = [1000,500,100,50,20,10,5,2,1];
var result  =[];
notes.forEach(function(note){
	if(rupees >= note)  
		result.push(+note+':'+Math.floor(rupees/note));
	rupees = rupees%note;
});
console.log(result.join(' '));