function cat(name) {
	this.name = name;
	this.talk = function() {
		console.log( this.name + " say meeow!" )
	}
} 

// cat1 = new cat("felix")
// console.log(cat1);
// console.log(cat1.talk()) //alerts "felix says meeow!"

// cat2 = new cat("ginger")
// console.log(cat2);
// cat2.talk() //alerts "ginger says meeow!"
cat.prototype.changeName = function(name) {
	this.name = name;
}

firstCat = new cat("pursur")
// console.log(firstCat);
firstCat.changeName("Bill")
firstCat.talk() //alerts "Bill says meeow!"
