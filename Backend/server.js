const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactions');

<<<<<<< HEAD
=======
dotenv.config();

>>>>>>> 29bd98db88e85c620bf99d04bf9273798e1235d5

const app = express();


app.use(cors());
app.use(express.json()); 


connectDB();

app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
    res.send('Expense Tracker API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
