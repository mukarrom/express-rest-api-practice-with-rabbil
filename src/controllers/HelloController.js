exports.Hello = (req, res) => {
	res.status(200).json({
		status: 'Success',
		data: 'Hello this is my first express rest api',
	});
};
