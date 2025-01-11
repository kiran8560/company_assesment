import React, { useEffect, useState } from 'react';
import './Comments.css'; // Ensure this path is correct

const Comments = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        const userReviews = data[0].page_config.find(item => item.id === '6');
        if (userReviews) {
          setReviews(userReviews.props);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-section">
      <h2>What our Users say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <span className="stars">{'⭐'.repeat(review.rating)}</span>
              <span className="date">{review.days}</span>
              <span className="location">{review.location || '📍 Bangalore'}</span>
            </div>
            <p className="review-text">{review.content}</p>
            <div className="review-footer">
              <span className="user-icon">👤</span>
              <span className="user-name">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;