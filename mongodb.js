const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace this URL with your MongoDB URL
        const conn = await mongoose.connect('mongodb://localhost:27017/taskManagerDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
