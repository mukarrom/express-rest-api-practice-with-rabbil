const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// const port = process.env.RUNNING_PORT;

app.listen(process.env.RUNNING_PORT, function () {
	console.log(
		`Server running successfully from port: ${process.env.RUNNING_PORT}`
	);
});
