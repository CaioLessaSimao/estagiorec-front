// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'http://34.234.94.5';

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