var assert = require("assert")
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(2, [1,2,3].indexOf(3));
    })
  })