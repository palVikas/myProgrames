var lib = require('../own-module/twSchool_records');
var assert = require('chai').assert;
var fs = require('fs');
var dbFileData = fs.readFileSync('tests/data/school.db.backup');
var twSchool_record;

describe('twSchool_record', function(){
    beforeEach(function(){
		  fs.writeFileSync('tests/data/school.db',dbFileData);
		  twSchool_record = lib.init('tests/data/school.db');
    });
    describe('#getGrades', function(){
        it('its retrives 2 grades', function(done){
      	   twSchool_record.getGrades(function(err,grades){
      		    assert.deepEqual(grades,[{id:1,name:'class 1'},{id:2,name:'class 2'}])
        	     done();
         });
      })
  })
    
    describe('#getStudentsByGrades' , function(){
        it('gives the students in 2 grades', function(done){
            twSchool_record.getStudentsByGrades(function(err,grades){
                assert.lengthOf(grades,2);
                assert.lengthOf(grades[0].students,3);
                assert.lengthOf(grades[1].students,0);
                done();
            })
        })
    })

      describe('#getSubjectsByGrades' , function(){
        it('gives the subjects in 2 grades', function(done){
            twSchool_record.getSubjectsByGrades(function(err,grades){
                assert.lengthOf(grades,2);
                assert.lengthOf(grades[0].subjects,3);
                assert.lengthOf(grades[1].subjects,0);
                done();
            })
        })
    })
})