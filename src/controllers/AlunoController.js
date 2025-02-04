import AlunoRepository from '../models/repository/AlunoRepository';
import BaseController from './BaseController';

class AlunoController extends BaseController {
    constructor() {
        super();
        this.repository = new AlunoRepository();
    }
}

export default AlunoController;