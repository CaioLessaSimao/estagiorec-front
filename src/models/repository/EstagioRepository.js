import Estagio from "../entities/Estagio";
import EstagioApi from "./api/EstagioApi";
import AlunoRepository from "./AlunoRepository";
import EmpresaRepository from "./EmpresaRepository";
import OrientadorRepository from "./OrientadorRepository";

class EstagioRepository {
  api_client;
  aluno_repository;
  empresa_repository;
  orientador_repository;
  constructor() {
    this.api_client = EstagioApi;
    this.aluno_repository = new AlunoRepository();
    this.empresa_repository = new EmpresaRepository();
    this.orientador_repository = new OrientadorRepository();
  }

  
  async ObterPorAluno(id){
    const responseJson = await this.api_client.ObterPorAluno(id);
    return await Promise.all(responseJson.map(async (estagio) => {
      const aluno = await this.aluno_repository.Obter(estagio.alunoId);
      const empresa = await this.empresa_repository.Obter(estagio.empresaId);
      const orientador = await this.orientador_repository.Obter(estagio.orientadorId);
      return new Estagio(
        estagio.id, 
        estagio.datIni, 
        estagio.datFim, 
        estagio.situacao, 
        aluno, 
        empresa, 
        orientador
      );
    }));
  }

  async ObterPorOrientador(id){
    const responseJson = await this.api_client.ObterPorOrientador(id);
    return await Promise.all(responseJson.map(async (estagio) => {
      const aluno = await this.aluno_repository.Obter(estagio.alunoId);
      const empresa = await this.empresa_repository.Obter(estagio.empresaId);
      const orientador = await this.orientador_repository.Obter(estagio.orientadorId);
      return new Estagio(
        estagio.id, 
        estagio.datIni, 
        estagio.datFim, 
        estagio.situacao, 
        aluno, 
        empresa, 
        orientador
      );
    }));
  }
  
  async ObterPorEmpresa(id){
    const responseJson = await this.api_client.ObterPorEmpresa(id);
    return await Promise.all(responseJson.map(async (estagio) => {
      const aluno = await this.aluno_repository.Obter(estagio.alunoId);
      const empresa = await this.empresa_repository.Obter(estagio.empresaId);
      const orientador = await this.orientador_repository.Obter(estagio.orientadorId);
      return new Estagio(
        estagio.id, 
        estagio.datIni, 
        estagio.datFim, 
        estagio.situacao, 
        aluno, 
        empresa, 
        orientador
      );
    }));
  }
  
  async ObterTodos(){
    const responseJson = await this.api_client.ObterTodos();
    return await Promise.all(responseJson.map(async (estagio) => {
      const aluno = await this.aluno_repository.Obter(estagio.alunoId);
      const empresa = await this.empresa_repository.Obter(estagio.empresaId);
      const orientador = await this.orientador_repository.Obter(estagio.orientadorId);
      return new Estagio(
        estagio.id, 
        estagio.datIni, 
        estagio.datFim, 
        estagio.situacao, 
        aluno, 
        empresa, 
        orientador
      );
    }));
  }

  async Obter(id){
    const responseJson = await this.api_client.Obter(id);
    const aluno = await this.aluno_repository.Obter(responseJson.alunoId);
    const empresa = await this.empresa_repository.Obter(responseJson.empresaId);
    const orientador = await this.orientador_repository.Obter(responseJson.orientadorId);
    return new Estagio(
      responseJson.id, 
      responseJson.datIni, 
      responseJson.datFim, 
      responseJson.situacao, 
      aluno, 
      empresa, 
      orientador
    );
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