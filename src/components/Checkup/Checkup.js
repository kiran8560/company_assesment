import React, { useEffect, useState } from 'react';
import './Checkup.css';

const Checkup = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [packages, setPackages] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        const categoryData = data[0].page_config.find(item => item.id === '3');
        if (categoryData) {
          setCategories(categoryData.categories['10386']);
          setPackages(categoryData.props[0].packages);
          setQuantities(categoryData.props[0].packages.reduce((acc, pkg) => {
            acc[pkg.packageDisplayName] = 1;
            return acc;
          }, {}));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCategories();
  }, []);

  const filteredPackages = packages.filter(pkg =>
    pkg.subCategories.includes(selectedCategory.toUpperCase())
  );

  const incrementQuantity = (packageName) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [packageName]: prevQuantities[packageName] + 1
    }));
  };

  const decrementQuantity = (packageName) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [packageName]: Math.max(prevQuantities[packageName] - 1, 1)
    }));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h2>Featured Health Check-up Packages</h2>
        <a href="#" className="view-all">View All</a>
      </header>

      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="package-container">
        <div className="package-slider">
          {filteredPackages.map((pkg, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3>{pkg.packageDisplayName}</h3>
                {pkg.isSponsored && <span className="sponsored">Sponsored</span>}
              </div>
              <div className="card-body">
                <p className="report-time">🕒 {pkg.reportsTatText}</p>
                <div className="details">
                  <div>
                    <strong>{pkg.testCount} Tests</strong>
                    <ul>
                      {pkg.testsSummary.slice(0, 2).map((test, index) => (
                        <li key={index}>{test}</li>
                      ))}
                      <li>+ {pkg.testsSummary.length - 2} more</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Includes</strong>
                    <p>📘 {pkg.subCategories.join(', ')}</p>
                  </div>
                </div>
                <div className="availability">
                  <div>
                    Fasting<br />
                    {pkg.fastingHoursText}
                  </div>
                  <div>
                    Available<br />
                    🏠 {pkg.currentVisitType}
                  </div>
                </div>
                <div className="price-section">
                  <span className="price">₹ {pkg.price}</span>
                  <div className="quantity">
                    <button onClick={() => decrementQuantity(pkg.packageDisplayName)}>-</button>
                    <span>{quantities[pkg.packageDisplayName]}</span>
                    <button onClick={() => incrementQuantity(pkg.packageDisplayName)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkup;