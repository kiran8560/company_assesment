import React, { useEffect, useState } from 'react';
import './Diseases.css'; // Ensure this path is correct

const HealthCheckupPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        const lifestylePackages = data[0].page_config.find(item => item.id === '4');
        if (lifestylePackages) {
          setPackages(lifestylePackages.props);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="packages-section">
      <h2>Lifestyle Health Check-up Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.imgSrc} alt={pkg.title} />
            <p>{pkg.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckupPackages;