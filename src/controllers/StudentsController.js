const StudentsModel = require('../models/StudentsModel');

// insert data
exports.InsertData = (req, res) => {
	// request body var
	const requestBody = req.body;

	StudentsModel.create(requestBody)
		.then((result) => {
			res.status(201).json({ status: 'Success', data: result });
		})
		.catch((err) => {
			res.status(400).json({ status: 'Fail', data: err });
		});
};

// Read data
exports.ReadData = (req, res) => {
	const query = {};
	const projection = 'Name Roll';
	StudentsModel.find(query, projection)
		.then((result) => {
			res.status(200).json({ status: 'Success', data: result });
		})
		.catch((err) => {
			res.status(400).json({ status: 'Fail', data: err });
		});
};

// update data
exports.updateData = (req, res) => {
	const id = req.params.id;
	const query = { _id: id };
	const reqBody = req.body;

	StudentsModel.updateOne(query, reqBody)
		.then((result) => {
			res.status(200).json({ status: 'Success', data: result });
		})
		.catch((err) => {
			res.status(400).json({ status: 'Fail', data: err });
		});
};

// delete data
exports.deleteData = (req, res) => {
	const id = req.params.id;
	const query = { _id: id };

	StudentsModel.deleteOne(query)
		.then((result) => {
			res.status(200).json({ status: 'Success', data: result });
		})
		.catch((err) => {
			res.status(400).json({ status: 'Fail', data: err });
		});
};
