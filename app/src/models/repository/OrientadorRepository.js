import Orientador from '../entities/Orientador';
import BaseRepository from './BaseRepository';

class OrientadorRepository extends BaseRepository {
  
  api_entity = "orientadores";
  
  static async fetchAll(){
    return await this.ObterTodos().value.map((orientador) => new Orientador(orientador.id, orientador.nome, orientador.email));
  }


}

export default OrientadorRepository;