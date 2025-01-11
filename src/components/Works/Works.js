import React, { useEffect, useState } from 'react';
import './Works.css'; // Ensure this path is correct

const Works = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        const faqData = data[0].page_config.find(item => item.id === '7');
        if (faqData) {
          const howItWorks = faqData.props.find(prop => prop.id === 1);
          if (howItWorks) {
            setSteps(howItWorks.points);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className="how-it-works-section">
      <h2>How it Works?</h2>
      {steps.map((step, index) => (
        <div className="step" key={index}>
          <img src={step.img} alt={`Step ${index + 1}`} />
          <p>{step.pnt}</p>
        </div>
      ))}
    </div>
  );
};

export default Works;