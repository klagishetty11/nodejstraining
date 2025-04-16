const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentcontroller');
const authenticate = require('../middleware/authenticate');
router.use(authenticate); // Apply authentication middleware to all routes
router.get('/', controller.getStudents); // Get all students
router.get('/:id', controller.getStudentById); // Get a student by ID 
router.post('/', controller.createStudent); // Create a new student
router.put('/:id', controller.updateStudent); // Update a student by ID 
router.delete('/:id', controller.deleteStudent); // Delete a student by ID
module.exports = router; // Export the router for use in the main app