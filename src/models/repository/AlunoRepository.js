import Aluno from '../entities/Aluno';
import AlunoApi from './api/AlunoApi';

class AlunoRepository {
  api_client;
  constructor() {
    this.api_client = AlunoApi;
  }

  async ObterTodos(){
    const responseJson = await this.api_client.ObterTodos();
    return responseJson.map((aluno) => new Aluno(aluno.id, aluno.matricula, aluno.nome));
  }

  async Obter(id){
    const responseJson = await this.api_client.Obter(id);
    return new Aluno(responseJson.id, responseJson.matricula, responseJson.nome);
  }

  async Atualizar(dados){
    return await this.api_client.Atualizar(dados);
  }

  async Criar(dados){
    return await this.api_client.Criar(dados);
  }

  async Deletar(id){
    return await this.api_client.Deletar(id);
  }
}

export default AlunoRepository;