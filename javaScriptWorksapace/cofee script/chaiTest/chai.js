var assert = require('chai').assert
var lib = require('./chaiLib.js').lib;
var foo = 'bar'
var vikas = 6 ;
var beverages = { tea: [ 'chai', 'matcha', 'oolong','heloo' ] };

assert.typeOf(foo, 'string', 'foo is a string');
assert.typeOf(vikas, 'number', 'vikas is a number');
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 4, 'beverages has 3 types of tea');
assert.ok('everything', 'everything is ok');
assert.equal(lib.factorial(0),1,'factorial of 0 gives 1');
assert.equal(lib.factorial(7),5040,'factorial of 7 gives 5040');
assert.equal(lib.factorial(5),120,'factorial of five gives 120');
assert.equal(lib.factorial(-2),1,'factorial of -2 gives 1');
assert.ok(true, 'this will fail');
assert.equal(0,lib.readBinary(0),'readBinary gives 0');
assert.equal(1,lib.readBinary(1),'readBinary gives 1');
assert.equal(2,lib.readBinary(10),'readBinary gives 2');
assert.equal(9,lib.readBinary(1001),'readBinary gives 9');
