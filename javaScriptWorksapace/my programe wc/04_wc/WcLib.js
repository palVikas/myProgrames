var lib = {};
exports.lib = lib;
var fs = require('fs');

lib.checkInFileDirectory = function(file){
	return fs.existsSync(file);
}

lib.charecterCount = function(text){
    var count = text.length;
    return count;
};

lib.filePath = function(fileName){
	fd = fs.realpathSync(fileName)
	return fd;
};

lib.getCountLine = function(text){
	return text.split("\n").length-1 || [].length;
};

lib.getWordsCount = function(text){
	var count = 0;
	var textSplit = text.split('\r\n');
	var wordCount = textSplit.forEach(function(wordLine){
		             wordLine.split(/\s+/ ).forEach(function(eachWord){
		              if(eachWord!='')
		               count++;
		  });
	});
	return count;
};
	
lib.getMaximumLengthOfTheLine = function(text){
	var lineSplit = text.split('\r\n');
	var maxLengthOfLine = lineSplit.map(function(line){
		              return line.length
	});
	var maximumLineLength = Math.max.apply(null,maxLengthOfLine);
	return maximumLineLength;
};

lib.optionIsValid = function(option){
	var flags = ['-l','--l','--lines','-c','--c','--bytes','--chars','-L','--L','--max-line-length','-w','--w','--words'];
	return (flags.indexOf(option)>=0);
};
lib.optionIsNotRepeted = function(option){
	var uniqeOption =[];
	 option.forEach(function(flag){
	 	 if(uniqeOption.indexOf(flag)<0)
	 		uniqeOption.push(flag);
	 })
	 return uniqeOption;
}