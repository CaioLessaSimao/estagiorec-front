class Orientador{
    id;
    nome;
    email;
    telefone;

    constructor(id, nome, email, telefone){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        //estagios.forEach((estagio) => this.estagios.add(estagio) );
    }
}

export default Orientador;