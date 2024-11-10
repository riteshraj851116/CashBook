import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AmountPage.css';

const Amount = () => {
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    // Helper function to set Authorization header with the token from localStorage
    const setAuthHeader = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found. User might not be logged in.');
        }
    };

    const fetchTotal = async () => {
        setAuthHeader(); // Ensure the token is included in the request header
        try {
            const response = await axios.get('http://localhost:5000/api/transactions/total');
            setTotal(response.data.total);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching total amount:', error);
            setLoading(false);
        }
    };

    const handleTransaction = async (type) => {
        const amountInput = prompt('Enter amount:');
        if (amountInput === null) return; // User cancelled
        const amount = parseFloat(amountInput);
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid positive number for the amount.');
            return;
        }

        const purpose = prompt('Enter purpose:');
        if (!purpose) {
            alert('Purpose cannot be empty.');
            return;
        }

        setAuthHeader(); // Ensure the token is included in the request header
        try {
            await axios.post('http://localhost:5000/api/transactions', { amount, purpose, type });
            fetchTotal(); // Refresh total
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Failed to add transaction. Please try again.');
        }
    };

    useEffect(() => {
        fetchTotal();
    }, []);

    if (loading) {
        return <p>Loading total amount...</p>;
    }

    return (
        <div className="amount-container">
            <h1>Total Amount: ₹{total.toFixed(2)}</h1>
            <div className="button-group">
                <button onClick={() => handleTransaction('cashIn')}>Cash In</button>
                <button onClick={() => handleTransaction('cashOut')}>Cash Out</button>
            </div>
        </div>
    );
};

export default Amount;
