var sqlite3 = require("sqlite3").verbose();

var _getGrades = function(db,onComplete){
	var q = 'select * from grades';
	db.all(q,onComplete);
};

var _getStudentByGrades = function(db,onComplete){
		_getGrades(db,function(err,grades){
			db.all('select * from students',function(err1,students){
				grades.forEach(function(grade){
					grade.students = students.filter(function(s){return s.grade_id ==grade.id})
				})
				onComplete(null,grades)
			})

		})

};
var _getSubjectByGrades = function(db,onComplete){
		_getGrades(db,function(err,grades){
			db.all('select * from subjects',function(err1,subjects){
				grades.forEach(function(grade){
					grade.subjects = subjects.filter(function(s){return s.grade_id ==grade.id})
				})
				onComplete(null,grades)
			})

		})

};

var _getStudentSummary = function(id,db,onComplete){
	var student_grade_query = "select s.name,s.id,g.name,g.id from students s,grades g where s.grades_id = g.id"
}
var init = function(location){
	var operate = function(operation ){//function jo return table grades
		return function(){//function body getgrades--err grades
			var onComplete = (arguments.length == 2)?arguments[1]:arguments[0];
			var arg = (arguments.length == 2) && arguments[0];
			var onDBOpen = function(err){
				if(err){onComplete(err);return;}
				db.run("PRAGMA foreign_keys = 'ON';");
				arg && operation(arg,db,onComplete);
				arg || operation(db,onComplete);
				db.close();
			};
			var db = new sqlite3.Database(location,onDBOpen);
		};	
	};

	var records = {		
		getGrades: operate(_getGrades),
		getStudentsByGrades: operate(_getStudentByGrades),
		getSubjectsByGrades: operate(_getSubjectByGrades)
	};
	return records;
};

exports.init = init;
