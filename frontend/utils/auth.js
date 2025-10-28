// src/utils/auth.js
import API from "./api";

// Signup user
export const signupUser = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/auth/login", userData);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
