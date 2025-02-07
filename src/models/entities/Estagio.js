class Estagio{
    Id; 
    DatIni;
    DatFim;
    Situacao;
    Aluno;
    AlunoId;
    Orientador;
    OrientadorId;
    Empresa;
    EmpresaId;

    constructor(Id, DatIni, DatFim, Situacao, Aluno, AlunoId, Orientador, OrientadorId, Empresa, EmpresaId){
        this.Id = Id;
        this.DatIni = DatIni;
        this.DatFim = DatFim;
        this.Situacao = Situacao;
        this.Aluno = Aluno;
        this.AlunoId = AlunoId;
        this.Orientador = Orientador;
        this.OrientadorId = OrientadorId;
        this.Empresa = Empresa;
        this.EmpresaId = EmpresaId;
        
    }

}
export default Estagio;