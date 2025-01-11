import React, { useEffect, useState } from "react";
import "./Banners.css";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(
          "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
        );
        const data = await response.json();

        const bannerData = data[0]?.page_config.find(
          (item) => item.title === "Banners"
        );

        if (bannerData && bannerData.props) {
          const activeBanners = bannerData.props.filter(
            (banner) => banner.isActive
          );
          setBanners(activeBanners);
        } else {
          console.error("No banner data found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [banners]);

  return (
    <div className="banner-carousel">
      {banners.length > 0 ? (
        <div className="banner-item">
          <a
            href={banners[currentIndex].deeplink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={banners[currentIndex].bannerUrl}
              alt={`Banner ${banners[currentIndex].order}`}
            />
          </a>
        </div>
      ) : (
        <p>Loading banners...</p>
      )}
    </div>
  );
};

export default Banners;