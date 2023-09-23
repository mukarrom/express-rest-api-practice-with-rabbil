exports.HelloGet = (req, res) => {
	res.status(202).json({
		status: 'Success',
		data: 'Hello get',
	});
};

exports.HelloPost = (req, res) => {
	res.status(201).json({
		status: 'Success',
		data: 'Hello Post',
	});
};
