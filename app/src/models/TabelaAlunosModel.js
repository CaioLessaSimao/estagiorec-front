// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'http://localhost:80';

class TabelaAlunos {
  static async ObterTodos() {
      const response = await axios.get(`${API_URL}/alunos`);
      return response.data;
  }

  static async Obter(id) {
    const response = await axios.get(`${API_URL}/alunos/id`);
    id
    return response.data;
  }

  static async Atualizar() {
    //axios.put(url[, data[, config]])
    const response = await axios.get(`${API_URL}/alunos`);
    return response.data;
  }

  static async Criar() {
    const response = await axios.get(`${API_URL}/alunos`);
    return response.data;
  }

  static async Deletar() {
    const response = await axios.get(`${API_URL}/alunos`);
    return response.data;
  }

}

export default TabelaAlunos;