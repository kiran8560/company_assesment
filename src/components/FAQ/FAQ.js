import React, { useEffect, useState } from 'react';
import './FAQ.css'; // Ensure this path is correct

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        const faqData = data[0].page_config.find(item => item.id === '7');
        if (faqData) {
          setFaqs(faqData.props);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isExpanded: i === index ? !faq.isExpanded : faq.isExpanded
    })));
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={faq.id} onClick={() => toggleFAQ(index)}>
          <div className="question">
            <span>{faq.question}</span>
            <span className="toggle">{faq.isExpanded ? '−' : '+'}</span>
          </div>
          {faq.isExpanded && (
            <div className="answer">
              <p>{faq.answer}</p>
              {faq.points && faq.points.map((point, idx) => (
                <p key={idx}>{point.pnt}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;