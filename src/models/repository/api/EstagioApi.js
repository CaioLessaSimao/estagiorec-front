import BaseApi from "./BaseApi";
import axios from "axios";

class EstagioApi extends BaseApi {
    static api_entity = 'estagios';

    static async ObterPorAluno(id){
        const response = await axios.get(`${this.API_URL}/${this.api_entity}/aluno/${id}`);
        return response.data;
    }

    static async ObterPorOrientador(id){
        const response = await axios.get(`${this.API_URL}/${this.api_entity}/Orientador/${id}`);
        return response.data;
    }

    static async ObterPorEmpresa(id){
        const response = await axios.get(`${this.API_URL}/${this.api_entity}/Empresa/${id}`);
        return response.data;
    }

}

export default EstagioApi;