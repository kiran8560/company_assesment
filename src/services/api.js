// src/services/api.js

export const fetchPageConfig = async () => {
    try {
      const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.page_config;
    } catch (error) {
      console.error('Error fetching page config:', error);
      return [];
    }
  };