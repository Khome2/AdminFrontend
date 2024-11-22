import { BASE_URL } from '../config';  // Import BASE_URL from config.js to avoid hardcoding URL

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json(); // Parse the response to JSON
    return data; // Return the data (success or error message) to the caller
  } catch (error) {
    console.error('Error registering user:', error); // Catch any errors and log them
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json(); // Parse the response to JSON
    return data; // Return the data (success or error message) to the caller
  } catch (error) {
    console.error('Error logging in user:', error); // Catch any errors and log them
  }
};
