//  // Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: null,
//     imageFile: null
//   });

  

//   const [submittedItems, setSubmittedItems] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   // Fetch data from GET API
//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// useEffect(() => {
//   axios.get(`${API_BASE_URL}/get-test-data`)
//     .then(res => {
//       console.log("Raw API response ======>", res.data); 
//       if (res.data.status && res.data.success) {
//         const formatted = res.data.test.map(item => ({
//           ...item,
//           image: `${API_BASE_URL.replace('/api', '')}/storage/${item.image}`, // if needed
//           createdAt: new Date(item.created_at).toLocaleString()
//         }));
//         setSubmittedItems(formatted);
//       }
//     })
//     .catch(err => {
//       console.error('Error fetching test data:', err);
//     });
// }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData(prev => ({
//         ...prev,
//         image: imageUrl,
//         imageFile: file
//       }));
//     }
//   };

//   // Submit form data to POST API
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataObj = new FormData();
//     formDataObj.append('title', formData.title);
//     formDataObj.append('description', formData.description);
//     if (formData.imageFile) {
//       formDataObj.append('image', formData.imageFile);
//     }

//     axios.post(`${API_BASE_URL}/test-store`, formDataObj)

//       .then(res => {
//         console.log("POST response ======>", res.data);
//         if (res.data.status && res.data.success) {
//           const newItem = {
//             ...res.data.test,
//             // image: `http://192.168.1.7:8000/storage/${res.data.test.image}`,
//             createdAt: new Date(res.data.test.created_at).toLocaleString()
//           };
//           setSubmittedItems(prev => [...prev, newItem]);
//           setShowForm(false);
//           setFormData({ title: '', description: '', image: null, imageFile: null });
//         }
//       })
//       .catch(err => {
//         console.error('Error uploading item:', err);
//       });
//   };

//   const toggleForm = () => {
//     setShowForm(prev => !prev);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <div className="header-card">
//           <div className="header-content">
//             <div>
//               <h1>Dashboard</h1>
//               <p className="text-muted">Your simplified project dashboard</p>
//             </div>
//             <button className="primary-button" onClick={toggleForm}>
//               {showForm ? "Cancel" : "+ New Item"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="dashboard-content">
//         {showForm && (
//           <div className="form-section">
//             <div className="card">
//               <h2 className="section-title">Add New Item</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="title">Title</label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     placeholder="Enter item title"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="description">Description</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows={3}
//                     placeholder="Describe the item"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="image">Upload Image</label>
//                   <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                   />
//                   {formData.image && (
//                     <div className="image-preview">
//                       <img
//                         src={formData.image}
//                         alt="Preview"
//                         style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 <div className="form-button-container">
//                   <button className="submit-button" type="submit">
//                     Submit Item
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         <div className="items-display-section">
//           <div className="card">
//             <h2 className="section-title">Uploaded Items</h2>

//             {submittedItems.length === 0 ? (
//               <p className="no-items-message">No items uploaded yet. Click on "+ New Item" to add your first item.</p>
//             ) : (
//               <div className="items-grid">
//                 {submittedItems.map(item => (
//                   <div key={item.id} className="item-card">
//                     {item.image && (
//                       <div className="item-image">
//                         <img src={item.image} alt={item.title} />
//                       </div>
//                     )}
//                     <div className="item-content">
//                       <h3>{item.title}</h3>
//                       <p>{item.description}</p>
//                       <small className="item-date">Added: {item.createdAt}</small>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/TestDataPage.jsx
// import React, { useEffect, useState } from "react";

// const TestDataPage = () => {
//   const [testData, setTestData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_URL = "https://reactest.vyaparkranti.in/api/api/get-test-data";
//   const IMAGE_BASE = "https://reactest.vyaparkranti.in/";
  
//   useEffect(() => {
//     console.log("Fetching test data from:", API_URL);
  
//     fetch(API_URL)
//       .then((res) => {
//         console.log("Raw response:", res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Parsed JSON data:", data);
//         setTestData(data.test || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("❌ Error fetching test data:", error);
//         setLoading(false);
//       });
//   }, []);
  
//   if (loading) return <div className="text-center p-4">Loading...</div>;

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {testData.map((item) => (
//         <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">
//           <img
//             src={`${IMAGE_BASE}${item.image}`}
//             alt={item.title}
//             className="w-full h-48 object-cover rounded-lg mb-3"
//           />
//           <h2 className="text-xl font-bold">{item.title}</h2>
//           <p className="text-gray-600">{item.description}</p>
//           <p className="text-sm text-gray-400 mt-2">
//             Created at: {new Date(item.created_at).toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestDataPage;


// src/pages/TestDataPage.jsx
import React, { useEffect, useState } from "react";
import { fetchTestData } from "../../api/apiService";
import { IMAGE_BASE_URL } from "../../api/config/apiConfig";

const TestDataPage = () => {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTestData = async () => {
      try {
        const data = await fetchTestData();
        setTestData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load test data. Please try again later.");
        setLoading(false);
      }
    };

    loadTestData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testData.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">
          <img
            src={`${IMAGE_BASE_URL}${item.image}`}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-400 mt-2">
            Created at: {new Date(item.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TestDataPage;

