const express = require('express');
const HelloController = require('../controllers/helloController');
const studentsController = require('../controllers/StudentsController');
const JWTPractice = require('../controllers/JWTPractice');
const router = express.Router();

// This is my first get routing
router.get('/hello-get', HelloController.HelloGet);

// This is my first post routing
router.post('/hello-post', HelloController.HelloPost);

// Mongoose
router.post('/insertStudent', studentsController.InsertData);
router.get('/readStudents', studentsController.ReadData);
router.post('/updateStudent/:id', studentsController.updateData);
router.get('/deleteStudent/:id', studentsController.deleteData);

// Create JWT Token
router.get('/CreateToken', JWTPractice.CreateToken);
router.get('/DecodeToken', JWTPractice.DecodeToken);

module.exports = router;
