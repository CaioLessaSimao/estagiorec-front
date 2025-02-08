import EstagioRepository from '../models/repository/EstagioRepository';
import BaseController from './BaseController';

class EstagioController extends BaseController {
    constructor() {
        super();
        this.repository = new EstagioRepository();
    }

    async ObterPorAluno(id){
        return this.repository.ObterPorAluno(id)
    }

    async ObterPorOrientador(id){
        return this.repository.ObterPorOrientador(id)
    }

    async ObterPorEmpresa(id){
        return this.repository.ObterPorEmpresa(id)
    }

}

export default EstagioController;