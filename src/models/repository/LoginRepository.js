// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'https://super-cod-jgjgpxv5rvg2q7w4-80.app.github.dev/';

class AuthModel {
  static async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;