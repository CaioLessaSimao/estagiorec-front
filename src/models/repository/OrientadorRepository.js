import Orientador from '../entities/Orientador';
import OrientadorApi from './api/OrientadorApi';

class OrientadorRepository {
  api_client;
  constructor() {
    this.api_client = OrientadorApi;
  }

  async ObterTodos(){
    const responseJson = await this.api_client.ObterTodos();
    return responseJson.map((orientador) => new Orientador(orientador.id, orientador.nome, orientador.email, orientador.telefone));
  }

  async Obter(id){
    return await this.api_client.Obter(id);
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

export default OrientadorRepository;