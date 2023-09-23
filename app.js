const express = require('express');
const router = require('./src/routes/api');
// instance of express
const app = new express();

// we can manage api version from here
app.use('/api/v1', router);

// Undefined Route
app.use('*', (req, res) => {
	res.status(404).json({ status: 'Failed', data: 'Not found' });
});

module.exports = app;
