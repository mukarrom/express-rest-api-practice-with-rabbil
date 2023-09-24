const StudentsModel = require('../models/StudentsModel');

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
	// no longer accepts a callback
	/* StudentsModel.create(requestBody, (err, data) => {
		if (err) {
			res.status(400).json({ status: 'Failed', data: err });
		} else {
			res.status(201).json({ status: 'Success', data: data });
		}
	}); */
};

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
