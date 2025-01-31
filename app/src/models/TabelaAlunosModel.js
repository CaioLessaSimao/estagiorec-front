// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'http://localhost:80';

class TabelaAlunos {
  static async PreencherTabela() {
      const response = await axios.get(`${API_URL}/alunos`);
      return response.data;
  }
}

export default TabelaAlunos;