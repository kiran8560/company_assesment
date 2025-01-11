import React from 'react';
import './LabVisited.css'; 

const LabsVisited = () => {
  const labs = [
    {
      image: "https://ik.imagekit.io/r7gygskpz/kiran.jpg",
      name: "Apollo Diagnostics",
      location: "Kormanangala, Bangalore",
      nextSlot: "07:30 AM, Tomorrow",
      rating: "4.5/5 (120 ratings)"
    },
    {
      image: "https://ik.imagekit.io/r7gygskpz/kiran2(2).jpg",
      name: "Aarthi Scans & Labs",
      location: "Kormanangala, Bangalore",
      nextSlot: "08:00 AM, Tomorrow",
      rating: "4.6/5 (120 ratings)"
    }
  ];

  return (
    <div>
      <div className="labs-header">
        <h2>Labs Visited</h2>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="lab-cards-container">
        {labs.map((lab, index) => (
          <div key={index} className="lab-card">
            <img src={lab.image} alt={lab.name} className="lab-image" />
            <div className="rating-badge">⭐ {lab.rating}</div>
            <div className="lab-info">
              <h3>{lab.name}</h3>
              <p>📍 {lab.location}</p>
              <p>🕒 Next Slot - {lab.nextSlot}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabsVisited;