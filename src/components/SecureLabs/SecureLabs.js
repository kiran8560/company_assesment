import React from 'react';
import './SecureLabs.css'; // Ensure this path is correct

const SecureLabs = () => {
  const safetyMeasures = [
    {
      image: "https://ik.imagekit.io/r7gygskpz/Group%20105499.svg",
      alt: "Gov. Approved",
      description: "Gov. Approved Diagnostic Centres"
    },
    {
      image: "https://ik.imagekit.io/r7gygskpz/Group%20105498.svg",
      alt: "Temperature Check",
      description: "Daily Temperature Check of all Technicians"
    },
    {
      image: "https://ik.imagekit.io/r7gygskpz/Group%20105503.svg",
      alt: "Mask & Sanitizers",
      description: "Mandatory use of Mask & Sanitizers"
    },
    {
      image: "https://ik.imagekit.io/r7gygskpz/Group%20105504.svg",
      alt: "Disinfection",
      description: "Regular Disinfection of Labs"
    }
  ];

  return (
    <div className="safety-section">
      <h2>100% Safe & Secure Lab Tests</h2>
      <div className="safety-grid">
        {safetyMeasures.map((measure, index) => (
          <div className="safety-card" key={index}>
            <img src={measure.image} alt={measure.alt} />
            <p>{measure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecureLabs;