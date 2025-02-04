import BaseRepository from './BaseRepository';
import Empresa from '../entities/Empresa';

class EmpresaRepository extends BaseRepository {
  
  api_entity = "empresas";
  
  static async fetchAll(){
    return await this.ObterTodos().value.map((empresa) => new Empresa(empresa.id, empresa.nome, empresa.estagios));
  }

}

export default EmpresaRepository;