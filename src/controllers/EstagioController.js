import EstagioRepository from '../models/repository/EstagioRepository';
import BaseController from './BaseController';

class EstagioController extends BaseController {
    constructor() {
        super();
        this.repository = new EstagioRepository();
    }
}

export default EstagioController;