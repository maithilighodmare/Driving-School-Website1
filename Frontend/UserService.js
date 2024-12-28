import axios from 'axios';

// Replace with your actual backend URL if needed
const API_URL = 'http://localhost:5000';  // or the hosted backend URL

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/items`, userData);
        return response.data;
    } catch (error) {
        console.error("Error during signup:", error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/items`, userData);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
