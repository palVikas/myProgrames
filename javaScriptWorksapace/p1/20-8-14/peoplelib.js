var lib = {};
exports.lib = lib;

lib.compare_by_length = function(a,b){
	 return (a.length-b.length)||(a>b?1:-1);
}

lib.arrange = function(names){
 	return names.sort(lib.compare_by_length);
};
