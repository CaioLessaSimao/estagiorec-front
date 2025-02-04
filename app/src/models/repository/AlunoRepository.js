import BaseRepository from './BaseRepository';
import Aluno from '../entities/Aluno';

class AlunoRepository extends BaseRepository {
  
  api_entity = "alunos";

  static async fetchAll(){
    return await this.ObterTodos().value.map((aluno) => new Aluno(aluno.id, aluno.matricula,aluno.nome));
  }
  


}

export default AlunoRepository;