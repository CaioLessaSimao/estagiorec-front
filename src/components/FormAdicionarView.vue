<template>
    <form @submit.prevent="submit">     
        <v-text-field
            v-model="aluno.value.value"
            :error-messages="aluno.errorMessage.value"
            label="Aluno"
        ></v-text-field>

        <!-- Novo campo: Data de Início -->
        <v-text-field
            v-model="dataInicio.value.value"
            :error-messages="dataInicio.errorMessage.value"
            label="Data de Início"
            type="date"
            @blur="validarDataInicio"
            @input="validarDataInicio"
        ></v-text-field>

        <!-- Novo campo: Data de Fim -->
        <v-text-field
            v-model="dataFim.value.value"
            :error-messages="dataFim.errorMessage.value"
            label="Data de Fim"
            type="date"
            @blur="validarDataFim"
            @input="validarDataFim"
        ></v-text-field>

        <v-text-field
            v-model="empresa.value.value"
            :error-messages="empresa.errorMessage.value"
            label="Empresa"
            @blur="validarEmpresa"
            @input="validarEmpresa"
        ></v-text-field>
  
        <v-text-field
            v-model="orientador.value.value"
            :error-messages="orientador.errorMessage.value"
            label="Orientador"
            @blur="validarOrientador"
            @input="validarOrientador"
        ></v-text-field>
  
        <v-select
            v-model="situacao.value.value"
            :error-messages="situacao.errorMessage.value"
            :items="situacoes"
            label="Situação"
            @blur="validarSituacao"
            @input="validarSituacao"
        ></v-select>
  
        <v-btn class="me-4" type="submit">
          Adicionar
        </v-btn>
    </form>
</template>
  
<script>
import { ref } from 'vue';
import { useField, useForm, defineRule } from 'vee-validate';
import AlunoController from '@/controllers/AlunoController';
import EmpresaController from '@/controllers/EmpresaController';
import OrientadorController from '@/controllers/OrientadorController';
import { mapSituacaoInverso } from '@/models/enums/SituacaoEnum';

export default {
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const { handleSubmit } = useForm();

    defineRule('required', (value) => (!value ? 'Este campo é obrigatório' : true));
    
    defineRule('validarAluno', async () => {
        const alunosController = new AlunoController()
        const registros = await alunosController.ObterTodos()

        let alunoEncontrado = false

        for (const aln of registros) {
            if(aln.Nome.toLowerCase() === aluno.value.value.toLowerCase()){
                requisicao["alunoId"] = aln.Id
                alunoEncontrado = true
            }
        }
        
        if (!alunoEncontrado) {
            return "Aluno não existe";
        }

        return true;
    })

    defineRule('validarEmpresa', async () => {
        const empresasController = new EmpresaController()
        const registros = await empresasController.ObterTodos()

        let empresaEncontrada = false

        for (const emp of registros) {
            if(emp.Nome.toLowerCase() === empresa.value.value.toLowerCase()){
                requisicao["empresaId"] = emp.Id
                empresaEncontrada = true
            }
        }
        
        if (!empresaEncontrada) {
            return "Empresa não existe";
        }
        return true;
    })

    defineRule('validarOrientador', async () => {
        const orientadoresController = new OrientadorController()
        const registros = await orientadoresController.ObterTodos()
        let orientadorEncontrado = false

        for (const ori of registros) {
            if(ori.Nome.toLowerCase() === orientador.value.value.toLowerCase()){
                requisicao["orientadorId"] = ori.Id
                orientadorEncontrado = true
            }
        }
        
        if (!orientadorEncontrado) {
            return "Empresa não existe";
        }
        return true;
    })

    let requisicao = {
        "datIni": "",
        "datFim": "",
        "situacao": 0,
        "empresaId": 0,
        "orientadorId": 0,
        "alunoId": 0
    }


    const aluno = useField('aluno', 'required|validarAluno');
    const empresa = useField('empresa', 'required|validarEmpresa');
    const orientador = useField('orientador', 'required|validarOrientador');
    const situacao = useField('situacao', 'required');
    const dataInicio = useField('dataInicio', 'required');
    const dataFim = useField('dataFim', 'required');

    const situacoes = ref(['Pendente', 'Andamento', 'Renovado']);

    const submit = handleSubmit((values) => { 
      requisicao["datIni"] = values.dataInicio
      requisicao["datFim"] = values.dataFim
      requisicao["situacao"] = mapSituacaoInverso(values.situacao)
      props.onSubmit(requisicao);
    });

    return {
      aluno,
      empresa,
      orientador,
      situacao,
      dataInicio,
      dataFim,
      situacoes,
      submit,
    };
  }
};
</script>
