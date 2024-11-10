const Transaction = require('../models/Transaction');

<<<<<<< HEAD

=======
/**
 * Add a new transaction
 */
>>>>>>> 29bd98db88e85c620bf99d04bf9273798e1235d5
exports.addTransaction = async (req, res) => {
    const { amount, purpose, type } = req.body;

    if (!amount || !purpose || !type) {
        return res.status(400).json({ message: 'Please provide amount, purpose, and type' });
    }

    try {
        const transaction = new Transaction({ amount, purpose, type });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

<<<<<<< HEAD

=======
/**
 * Get all transactions
 */
>>>>>>> 29bd98db88e85c620bf99d04bf9273798e1235d5
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ date: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Get total amount
 */
exports.getTotalAmount = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const total = transactions.reduce((acc, trans) => {
            return trans.type === 'cashIn' ? acc + trans.amount : acc - trans.amount;
        }, 0);
        res.status(200).json({ total });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
