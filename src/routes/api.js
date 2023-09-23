const express = require('express');
const HelloController = require('../controllers/helloController');
const router = express.Router();

// This is my first get routing
router.get('/hello-get', HelloController.HelloGet);

// This is my first post routing
router.post('/hello-post', HelloController.HelloPost);

module.exports = router;
