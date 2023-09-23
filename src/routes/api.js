const express = require('express');
const HelloController = require('../controllers/helloController');
const router = express.Router();

// This is my first get routing
router.get('/hello-get', HelloController.Hello);

// This is my first post routing
router.post('/hello-post', HelloController.Hello);
