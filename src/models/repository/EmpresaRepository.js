import Empresa from '../entities/Empresa';
import EmpresaApi from './api/EmpresaApi';

class EmpresaRepository {
  api_client;
  constructor() {
    this.api_client = EmpresaApi;
  }

  async ObterTodos(){
    const responseJson = await this.api_client.ObterTodos();
    return responseJson.map((empresa) => new Empresa(empresa.id, empresa.nome));
  }

  async Obter(id){
    const responseJson = await this.api_client.Obter(id);
    return new Empresa(responseJson.id, responseJson.nome);
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

export default EmpresaRepository;