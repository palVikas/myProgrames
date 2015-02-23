var school_records = require('../own-module/twSchool_records').init('./data/school.db');
exports.get_grades = function(req,res) {
	school_records.getGrades(function(err,grades){
		res.render('grades',{grades:grades});
	});
};

exports.get_subjects = function(req,res) {
	  school_records.getSubjectsByGrades(function(err,grades){
		res.render('subjects',{grades:grades});
	});
};

exports.get_students = function(req,res) {
	  school_records.getStudentsByGrades(function(err,grades){
		res.render('students',{grades:grades});
	});
};