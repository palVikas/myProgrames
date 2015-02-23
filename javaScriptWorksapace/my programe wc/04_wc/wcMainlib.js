var lib = require("./WcLib.js").lib;
var mainlib = {};
exports.mainlib = mainlib;
var fs = require('fs');

mainlib.getCountWithOption = function(fileName,option){
	  if(lib.optionIsValid(option)){
	  	switch(option){
	  		case '-l' :
	  		case '--l' :
	  		case '--lines' :return lib.getCountLine(fileName);
	  		case '-w' :
	  		case '--w' :
	  		case '--words' :return lib.getWordsCount(fileName);
	  		case '-c' :
	  		case '--c' :
	  		case '--chars' :
	  		case '--bytes' :return lib.charecterCount(fileName);
            case '-L' :
            case '--L' :
            case '--max-line-length' :return lib.getMaximumLengthOfTheLine(fileName);
	  	}
	  }
	 return 'invalid option';
};

mainlib.getExpectedResult = function(lines,words,bytes,filename){
	return console.log('\t'+lines+'\t'+words+'\t'+bytes+' '+filename);
}
mainlib.getExpectedResultWithFlags = function(filename,flags){
	var text = fs.readFileSync(filename,'utf8');
	return console.log('\t'+mainlib.getCountWithOption(text,flags)+' '+filename);
}

