class Estagio{
    Id; 
    DatIni;
    DatFim;
    Situacao;
    Aluno;
    Empresa;
    Orientador;

    constructor(Id, DatIni, DatFim, Situacao, Aluno, Empresa, Orientador){
        this.Id = Id;
        this.DatIni = DatIni;
        this.DatFim = DatFim;
        this.Situacao = Situacao;
        this.Aluno = Aluno;
        this.Empresa = Empresa;
        this.Orientador = Orientador;
    }

    get AlunoId(){
        return this.Aluno.Id;
    }

    get AlunoNome(){
        return this.Aluno.Nome;
    }

    get AlunoMatricula(){
        return this.Aluno.Matricula;
    }

    get OrientadorId(){
        return this.Orientador.Id;
    }

    get OrientadorNome(){
        return this.Orientador.Nome;
    }

    get EmpresaId(){
        return this.Empresa.Id;
    }

    get EmpresaNome(){
        return this.Empresa.Nome;
    }
}

export default Estagio;