import EmpresaRepository from '../models/repository/EmpresaRepository';
import BaseController from './BaseController';

class EmpresaController extends BaseController {
    constructor() {
        super();
        this.repository = new EmpresaRepository();
    }
}

export default EmpresaController;