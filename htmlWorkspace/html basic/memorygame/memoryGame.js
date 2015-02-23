var increseCount=0;
var isEven = function(value){
	return value%2 == 0;
}
var previousId ="";
var analise = function(id){
	document.getElementById(id).innerHTML = demo[id];
	increseCount++
	if(isEven(increseCount)){
		matchWithPrevious(id)
	}
	else
		previousId = id;
};
var demo = {
	'1':3,'2':4,'3':3,'4':4,'5':6,'6':8,'7':2,'8':6,'9':8,'10':2,'11':9,'12':5,'13':9,'14':7,'15':5,'16':7
};



var matchWithPrevious = function(id){
	if(demo[previousId]!= demo[id])
		setTimeout(3000,reset(id,previousId));
}

var reset = function(id,priId){
	document.getElementById(id).innerHTML = '?';
	document.getElementById(priId).innerHTML = '?';
}