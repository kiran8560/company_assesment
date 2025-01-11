import React, { useEffect, useState } from "react";
import "./LabTests.css"; // Ensure this path is correct

const LabTests = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const pageConfig = data[0]?.page_config || [];
        const page = pageConfig.find((p) => p.id === "3");

        if (page?.categories) {
          const categoryArray = page.categories["10386"];
          setCategories(categoryArray);
          setSelectedCategory(categoryArray[0]);
          setPackages(page.props[0].packages);
        } else {
          throw new Error("Invalid API structure: Categories missing");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setLoading(true);
    fetch("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config")
      .then((response) => response.json())
      .then((data) => {
        const pageConfig = data[0]?.page_config || [];
        const page = pageConfig.find((p) => p.id === "3");
        if (page?.props) {
          const filteredPackages = page.props[0].packages.filter((pkg) =>
            pkg.subCategories.includes(category.toUpperCase())
          );
          setPackages(filteredPackages);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category data:", err);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="tests-header">
        <h2>Book Popular Lab Tests</h2>
        <a href="#" className="view-more">
          View More
        </a>
      </div>

      <div className="tabs">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <button
              key={index}
              className={`tab ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))
        ) : loading ? (
          <p>Loading categories...</p>
        ) : (
          <p>{error || "No categories available"}</p>
        )}
      </div>

      <div>
        {loading ? (
          <p>Loading Lab Tests For You...</p>
        ) : packages.length > 0 ? (
          packages.slice(0, 5).map((pkg, index) => ( // Limit to 5 packages
            <div key={index} className="test-card">
              <div className="test-info">
                <h3>{pkg.packageDisplayName}</h3>
                <p>🕒 {pkg.reportsTatText}</p>
                <p>🏠 {pkg.visitType.join(", ")}</p>
              </div>
              <div className="test-price">
                <span className="original-price">₹ {pkg.priceRange}/-</span>
                <span className="discount">{pkg.discount}% OFF</span>
                <span className="final-price">₹ {pkg.price}/- Onwards</span>
                <button className="add-button">Add</button>
              </div>
              <div className="cashless-badge">✔️ Cashless</div>
            </div>
          ))
        ) : (
          <p>No packages available for this category</p>
        )}
      </div>
    </div>
  );
};

export default LabTests;