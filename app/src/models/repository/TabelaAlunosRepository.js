// src/models/AuthModel.js
import axios from 'axios';

const API_URL = 'http://localhost:80';

class TabelaAlunos {
  static async ObterTodos() {
      const response = await axios.get(`${API_URL}/alunos`);
      return response.data;
  }

  static async Obter(id) {
    const response = await axios.get(`${API_URL}/alunos/${id}`);
            
    return response.data;
  }

  static async Atualizar(dados) {
    //axios.put(url[, data[, config]])
    const response = await axios.put(`${API_URL}/alunos/${dados.id}`, dados);
    return response.data;
  }

  static async Criar(dados) {
    const response = await axios.post(`${API_URL}/alunos`, dados);
    return response.data;
  }

  static async Deletar(id) {
    const response = await axios.delete(`${API_URL}/alunos/${id}`);
    return response.data;
  }

}

export default TabelaAlunos;