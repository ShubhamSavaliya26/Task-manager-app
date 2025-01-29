const express = require('express');
const app = express();
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/task-manager', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

// Routes
app.use('/tasks', taskRoutes);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
