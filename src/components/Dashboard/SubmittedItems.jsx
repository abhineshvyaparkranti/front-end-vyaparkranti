// SubmittedItems.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Reuse the same styles or create a new one if needed

const SubmittedItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.7:8000/api/get-test-data')
      .then(res => {
        console.log("Raw API response ======>", res.data); 
        if (res.data.status && res.data.success) {
          const formatted = res.data.test.map(item => ({
            ...item,
            image: `http://192.168.1.7:8000/storage/${item.image}`,
            createdAt: new Date(item.created_at).toLocaleString()
          }));
          setItems(formatted);
          console.log("Formatted items ======>", formatted);
        }
      })
      .catch(err => {
        console.error('Error fetching test data:', err);
      });
  }, []);

  return (
    <div className="submitted-items-container">
      <div className="card">
        <h2 className="section-title">Submitted Items</h2>
        {items.length === 0 ? (
          <p className="no-items-message">No items found.</p>
        ) : (
          <div className="items-grid">
            {items.map(item => (
              <div key={item.id} className="item-card">
                {item.image && (
                  <div className="item-image">
                   
                  </div>
                )}
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small className="item-date">Added: {item.createdAt}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmittedItems;
