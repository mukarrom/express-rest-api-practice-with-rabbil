const express = require('express');
const router = require('./src/routes/api');
// instance of express
const app = new express();

// Security Middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Request Rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

app.use(limiter);

// we can manage api version from here
app.use('/api/v1', router);

// Undefined Route
app.use('*', (req, res) => {
	res.status(404).json({ status: 'Failed', data: 'Not found' });
});

module.exports = app;
