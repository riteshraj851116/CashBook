const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
<<<<<<< HEAD
        process.exit(1);     }
=======
        process.exit(1); // Exit process with failure
    }
>>>>>>> 29bd98db88e85c620bf99d04bf9273798e1235d5
};

module.exports = connectDB;
