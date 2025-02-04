class Orientador{
    Id;
    Nome;
    Email;
    Telefone;

    constructor(Id, Nome, Email, Telefone){
        this.Id = Id;
        this.Nome = Nome;
        this.Email = Email;
        this.Telefone = Telefone;
        //estagios.forEach((estagio) => this.estagios.add(estagio) );
    }
}

export default Orientador;