const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
	Name: { type: String },
	Roll: { type: Number },
	Class: { type: String },
	Remarks: { type: String, default: 'no remarks' },
});

const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;
