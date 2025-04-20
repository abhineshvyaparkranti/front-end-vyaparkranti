import axios from 'axios';

// Ensure API_BASE has a fallback or clear error if not set
const API_BASE = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE) {
  console.error("❌ REACT_APP_API_BASE_URL is not defined in your .env file");
}

export const getTestData = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-test-data`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching test data:", err.response || err.message || err);
    throw err;
  }
};

export const postTestData = async (formData) => {
  try {
    const res = await axios.post(`${API_BASE}api/test-store`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Error uploading test data:", err.response || err.message || err);
    throw err;
  }
};

