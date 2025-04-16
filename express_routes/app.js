const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentroutes');
const logger = require('./middleware/logger');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(logger); // Custom logger middleware

// Routes
app.use('/api/students', studentRoutes); // Use student routes

// start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
