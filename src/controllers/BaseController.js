class BaseController {
    repository;

    async ObterTodos() {
        const response = await this.repository.ObterTodos();
        return response;
    }

    async Obter(id) {
        const response = await this.repository.Obter(id);
        return response;
    }

    async Atualizar(dados) {
        const response = await this.repository.Atualizar(dados);
        return response;
    }

    async Criar(dados) {
        const response = await this.repository.Criar(dados);
        return response;
    }

    async Deletar(id) {
        const response = await this.repository.Deletar(id);
        return response;
    }
}

export default BaseController;