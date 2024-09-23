const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    amount: { 
        type: Number, 
        required: true 
    },
    purpose: { 
        type: String,
        required: true 
    },
    type: { 
        type: String,
        enum: ['cashIn', 'cashOut'], 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
