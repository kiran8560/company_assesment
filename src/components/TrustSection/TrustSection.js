import React from 'react';
import './TrustSection.css'; // Ensure this path is correct

const TrustSection = () => {
  return (
    <div className="trust-section">
      <div className="trust-header">
        <h2>
          Trusted by <span className="highlight">20,00,000+</span> Users Every month
        </h2>
        <img src="https://res.cloudinary.com/dwwa6fot3/image/upload/v1736592322/Group_105496_i3dtcy.png" alt="Shield" className="icon" />
      </div>
      <div className="trust-details">
        <div className="trust-item">
          <img src="https://res.cloudinary.com/dwwa6fot3/image/upload/v1736592322/Group_104702_tjcykb.png" alt="Microscope" className="icon" />
          <p>200+ Approved Diagnostic Centres</p>
        </div>
        <div className="trust-item">
          <img src="https://res.cloudinary.com/dwwa6fot3/image/upload/v1736592322/Group_105497_gevblt.png" alt="Glasses" className="icon" />
          <p>1200+ Lab Tests Offered</p>
        </div>
        <div className="trust-item">
          <img src="https://res.cloudinary.com/dwwa6fot3/image/upload/v1736592322/Group_105501_ur8d9h.png" alt="Location" className="icon" />
          <p>1200+ Pincodes Covered</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;