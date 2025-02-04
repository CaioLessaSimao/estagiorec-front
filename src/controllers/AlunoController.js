import AlunoRepository from 'repository/AlunoRepository';
class AlunoController{
    
    aluno = new AlunoRepository();
    
    static async ObterTodos() {
        const response = await AlunoRepository.fetchAll();
        return response;
    }
  
    static async Obter(id) {
      const response = await axios.get(`${this.API_URL}/${this.api_entity}/${id}`);
              
      return response.data;
    }
  
    static async Atualizar(dados) {
      const response = await axios.put(`${this.API_URL}/${this.api_entity}/${dados.id}`, dados);
      return response.data;
    }
  
    static async Criar(dados) {
      const response = await axios.post(`${this.API_URL}/${this.api_entity}`, dados);
      return response.data;
    }
  
    static async Deletar(id) {
      const response = await axios.delete(`${this.API_URL}/${this.api_entity}/${id}`);
      return response.data;
    }
}