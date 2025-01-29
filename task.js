const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskManager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Use task routes
app.use('/', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'complete'], default: 'pending' }
});

module.exports = mongoose.model('Task', taskSchema);
