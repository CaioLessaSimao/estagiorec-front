import Estagio from "../entities/Estagio";
import EstagioApi from "./api/EstagioApi";
//import AlunoApi from "./api/AlunoApi";
//import EmpresaApi from "./api/EmpresaApi";
//import OrientadorApi from "./api/OrientadorApi";

class EstagioRepository {
  api_client;
  constructor() {
    this.api_client = EstagioApi;
  }

  async ObterTodos(){
    const responseJson = await this.api_client.ObterTodos();
    return responseJson.map((estagio) => new Estagio(estagio.Id, estagio.datIni, estagio.datFim, estagio.situacao, "Jorge", estagio.alunoId, "Boldt Super Cão", estagio.orientadorId, "EmpresaMtFoda", estagio.empresaId));
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

export default EstagioRepository;