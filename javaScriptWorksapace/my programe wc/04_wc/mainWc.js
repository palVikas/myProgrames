var mainlib = require('./wcMainlib.js').mainlib
var lib = require("./WcLib.js").lib;
var fs = require('fs');
var ERROR_TEMPLATE = 'wc: _FILE_: No such file or directory';

var standardOutputResult = function(file,flags){
    if( flags.length == 0){
	if(lib.checkInFileDirectory(file)){
	var text = fs.readFileSync(file,'utf8')
	var lines = lib.getCountLine(text);
	var bytes = lib.charecterCount(text);
	var maxLineLength = lib.getMaximumLengthOfTheLine(text);
	var words = lib.getWordsCount(text);
	return  mainlib.getExpectedResult(lines,words,bytes,file);
 };
}
   
     if(lib.optionIsValid(flags)){
     if(lib.checkInFileDirectory(file)){
  	 return mainlib.getExpectedResultWithFlags(file,flags);
 }
   }
   if(!lib.checkInFileDirectory(file)){
 return console.log(ERROR_TEMPLATE.replace(/_FILE_/,file));
};
};

exports.filesAndOption = function(answer){
var files = [];
var flags = [];
answer.forEach(function(command){
	if(lib.checkInFileDirectory(command)){
		if(files.indexOf(command)<0)
		files.push(command)
	}
	else if(lib.optionIsValid(command)){
		if(flags.indexOf(command)<0)
		flags.push(command)
	}else
	  if(command.slice(0,1)!='-')
	  	files.push(command)
});
files.forEach(function(file){
 	if(flags.length==0){
 		standardOutputResult(file);
 	}else{ 
	flags.forEach(function(flag){
	standardOutputResult(file,flag);	
})
}
})

};





 
