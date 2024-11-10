import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HistoryPage.css'; 

const History = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const setAuthHeader = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found. User might not be logged in.');
        }
    };

    const fetchTransactions = async () => {
        setAuthHeader(); // Ensure the token is included in the request header
        try {
            const response = await axios.get('http://localhost:5000/api/transactions');
            setTransactions(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    if (loading) {
        return <p>Loading transaction history...</p>;
    }

    return (
        <div className="history-container">
            <h1>Transaction History</h1>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount (₹)</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((trans) => (
                            <tr key={trans._id}>
                                <td>{new Date(trans.date).toLocaleString()}</td>
                                <td>{trans.type === 'cashIn' ? 'Cash In' : 'Cash Out'}</td>
                                <td>{trans.amount.toFixed(2)}</td>
                                <td>{trans.purpose}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default History;
