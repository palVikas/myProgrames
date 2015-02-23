exports.filesAndOption = function(answer){
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
// files.forEach(function(file){
//  	if(flags.length==0){
//  		standardOutputResult(file,flags);
//  	}else{ 
// 	flags.forEach(function(flag){
// 	standardOutputResult(file,flag);	
// })
// }
// })

};
var standardOutputResult = function(files,flags){
	var result =[];
	files.forEach(function(file){
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
	 flags.forEach(function(flag){
     if(lib.optionIsValid(flags)){
     if(lib.checkInFileDirectory(file)){
     var textfile = fs.readFileSync(file,'utf8')
  	 // return mainlib.getExpectedResultWithFlags(file,flags);
  	 var output = mainlib.getCountWithOption(textfile,flags);
  	    result.push(output)
  	    console.log(output);
  	    result.push(file)
  	 return console.log('\t'+result.join(' '));
 
  	  }
  	    
   }
});
});
   if(!lib.checkInFileDirectory(file)){
 return console.log(ERROR_TEMPLATE.replace(/_FILE_/,file));
};
};

