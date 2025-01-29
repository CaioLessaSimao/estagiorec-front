// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'http://super-cod-jgjgpxv5rvg2q7w4-80.app.github.dev';

class TabelaAlunos {
  static async PreencherTabela() {
      const response = await axios.get(`${API_URL}/alunos`);
      return response.data;
  }
}

export default TabelaAlunos;