const express = require('express');
const { addTransaction, getTransactions, getTotalAmount } = require('../controllers/transactionController');

const router = express.Router();


router.post('/', addTransaction);


router.get('/', getTransactions);

router.get('/total', getTotalAmount);

module.exports = router;
