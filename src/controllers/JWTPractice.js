const jwt = require('jsonwebtoken');

exports.CreateToken = (req, res) => {
	let Payload = {
		exp: Math.floor(Date.now() / 1000) + 20,
		date: { Name: 'Mukarrom Hosain', City: 'Dhaka', admin: true },
	};
	let Token = jwt.sign(Payload, 'mmh123');
	res.send(Token);
};

exports.DecodeToken = (req, res) => {
	let Token = req.headers['token-key'];
	jwt.verify(Token, 'mmh123', function (err, decoded) {
		if (err) {
			res.status(401).json({ status: 'Invalid token', data: err });
		} else {
			res
				.status(200)
				.json({ status: 'Successfully Decoded Token', data: decoded });
		}
	});
	res.send(Token);
};
