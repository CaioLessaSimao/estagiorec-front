import OrientadorRepository from '../models/repository/OrientadorRepository';
import BaseController from './BaseController';

class OrientadorController extends BaseController {
    constructor() {
        super();
        this.repository = new OrientadorRepository();
    }
}

export default OrientadorController;