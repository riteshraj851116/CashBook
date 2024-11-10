import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Cash Book</h1>
      <p className="about-description">
        Welcome to the Cash Book application! This app helps you manage your finances by tracking all your transactions.
        You can easily add your income and expenses, and the app will show you the total balance. The Cash Book is built
        using the MERN stack (MongoDB, Express, React, Node.js) for a smooth and efficient experience.
      </p>
      <p className="about-credits">
        Developed by Ritesh Raj. For any inquiries or support, please contact us at support@cashbookapp.com.
      </p>
    </div>
  );
}

export default AboutPage;

