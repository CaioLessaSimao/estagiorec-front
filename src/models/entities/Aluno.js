class Aluno{
    Id;
    Matricula;
    Nome;

    constructor(Id, Matricula, Nome){
        this.Id = Id;
        this.Matricula = Matricula;
        this.Nome = Nome;
        //estagios.forEach((estagio) => this.Estagios.add(estagio) );
    }
}

export default Aluno;