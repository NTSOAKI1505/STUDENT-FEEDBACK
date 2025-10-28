// src/utils/api.js
import axios from "axios";

// Base URL for backend API
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally add auth token to headers
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
