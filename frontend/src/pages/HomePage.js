import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css'; 

function HomePage() {
  const navigate = useNavigate(); 
  const handleNavigate = () => {
    navigate('/amount'); 
  };

  
  const comments = [
    { id: 1, text: "This bank has revolutionized my life!", user: "vishes das" },
    { id: 2, text: "Absolutely love the customer service.", user: "Ritesh Raj" },
    { id: 3, text: "Best experience with any financial institution.", user: "Ava addam" },
    { id: 4, text: "Secure, reliable, and fast.", user: "Salmon bhai" },
    { id: 5, text: "Banking has never been this easy.", user: "nhi batuga" },
    { id: 6, text: "I recommend this bank to everyone!", user: "Modi ji" },
    { id: 7, text: "Seamless transactions every time.", user: "Rahul gadhi" },
    { id: 8, text: "Great mobile app and website.", user: "john cena" },
    { id: 9, text: "Customer care is on point.", user: "Anna Scott" },
    { id: 10, text: "Highly satisfied with the banking services.", user: "Chris Evans" }
  ];

  return (
    <>
      <div className="homepage-wrapper">
        <div className="homepage-text-container">
          <h1 className="homepage-title">This is a new era, money is always in your Pocket</h1>
          <p className="homepage-description">Your Money, Your Bank</p>
          <button className="homepage-cta-button" onClick={handleNavigate}>
            Get Started
          </button>
        </div>
        <div className="homepage-image-container"></div> {/* Bank image on the right */}
      </div>

      
      <div className="homepage-feedback-section">
        <h2 className="homepage-feedback-heading">User Feedback</h2>
        <div className="homepage-feedback-grid">
          {comments.map((comment) => (
            <div key={comment.id} className="homepage-feedback-card">
              <p className="homepage-feedback-text">"{comment.text}"</p>
              <h4 className="homepage-feedback-author">- {comment.user}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <p className="homepage-footer-text">&copy; 2024 Your Bank. All rights reserved.</p>
        <p className="homepage-footer-follow">Follow us on social media!</p>
        <div className="homepage-footer-icons">
          {/* Add social media icons here */}
          <span>Facebook</span> | <span>Twitter</span> | <span>Instagram</span>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
