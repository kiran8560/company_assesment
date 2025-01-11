import React from 'react';
import Header from './components/Header/Header';
import LabTests from './components/LabTests/LabTests';
import Banners from './components/Banners/Banners';
import Checkup from './components/Checkup/Checkup';
import ActiveBookings from './components/ActiveBookings/ActiveBookings';
import LabsVisited from './components/LabVisited/LabVisited';
import TrustSection from './components/TrustSection/TrustSection';
import Comments from './components/Comments/Comments';
import HealthCheckupPackages from './components/Diseases/Diseases';
import Works from './components/Works/Works';
import SecureLabs from './components/SecureLabs/SecureLabs';
import FAQ from './components/FAQ/FAQ'; // Ensure correct path

const App = () => {
  return (
    <div>
      <Header />
      <Banners />
      <Checkup />
      <ActiveBookings />
      <LabTests />
      <LabsVisited />
      <TrustSection />
      <Comments />
      <HealthCheckupPackages />
      <Works />
      <SecureLabs />
      <FAQ /> {/* Add FAQ component */}
    </div>
  );
};

export default App;