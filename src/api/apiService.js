// src/services/apiService.js
import { API_BASE_URL, API_ENDPOINTS } from '../api/config/apiConfig';

export const fetchTestData = async () => {
  try {
    console.log("Fetching test data from:", `${API_BASE_URL}${API_ENDPOINTS.TEST_DATA}`);
    
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.TEST_DATA}`);
    console.log("Raw response:", response);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Parsed JSON data:", data);
    
    return data.test || [];
  } catch (error) {
    console.error("❌ Error fetching test data:", error);
    throw error;
  }
};