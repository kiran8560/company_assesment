import React, { useEffect, useState } from 'react';
import './Header.css'; // Ensure this path is correct

const Dashboard = () => {
  const [pageConfig, setPageConfig] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        setPageConfig(data[0].page_config[0].props);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="back-arrow">
        <img src={`/assets/icons/arrow-left.svg`} alt="Back" />
        </div>
        <div className="location">
          <strong>Billekahalli</strong> <span className="location-icon"><img src={`/assets/icons/location.svg`}/></span>
          <div className="address">Sarvabhoumanagar Billekahall...</div>
        </div>
        <div className="icons">
          <div className="wallet">
            <span className="wallet-icon"><img src={`/assets/icons/wallet.svg`} alt="Wallet"/></span>
          </div>
          <div className="cart">
            <span className="cart-icon"> <img src={`/assets/icons/Cart.svg`} alt="Cart" className="cart-icon1" /></span>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Find lab tests, diagnostics centres" />
        <button>🔍</button>
      </div>

      <div className="grid">
        {pageConfig.map((item) => (
          item.isActive && (
            <div key={item.id} className="grid-item">
              <img src={item.iconUrl} alt={item.iconText} className="icon" />
              <div className="label">{item.iconText}</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Dashboard;