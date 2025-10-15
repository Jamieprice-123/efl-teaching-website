import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="quote-mark">"</div>
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <div className="testimonial-author">
        <div className="author-avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div className="author-info">
          <div className="author-name">{testimonial.name}</div>
          <div className="author-level">{testimonial.level}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;