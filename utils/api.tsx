// api.ts
import axios from 'axios';

// Create an axios instance
const api = axios.create({
  // baseURL: 'http://192.168.1.100:2110', // Physical android device
  baseURL:'http://10.0.2.2:2110', // Android emulator
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User
export const registerUser = async (username: string, password: string, email: string) => {
  try {
    const response = await api.post('/register', {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Login User
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await api.post('/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    const response = await api.post('/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete User
export const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(`/delete/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
