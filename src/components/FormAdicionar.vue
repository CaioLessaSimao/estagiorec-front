<template>
    <form @submit.prevent="submit">
      <!-- Combobox para Aluno com filtro -->
      <v-select
        v-model="aluno.value.value"
        :error-messages="aluno.errorMessage.value"
        :items="alunosList"
        item-title="Nome"
        item-value="Id"
        label="Aluno"
        :filter="filterItems"
      ></v-select>
  
      <!-- Combobox para Empresa com filtro -->
      <v-select
        v-model="empresa.value.value"
        :error-messages="empresa.errorMessage.value"
        :items="empresasList"
        item-title="Nome"
        item-value="Id"
        label="Empresa"
        :filter="filterItems"
      ></v-select>
  
      <!-- Combobox para Orientador com filtro -->
      <v-select
        v-model="orientador.value.value"
        :error-messages="orientador.errorMessage.value"
        :items="orientadoresList"
        item-title="Nome"
        item-value="Id"
        label="Orientador"
        :filter="filterItems"
      ></v-select>
  
      <!-- Data de Início -->
      <v-text-field
        v-model="dataInicio.value.value"
        :error-messages="dataInicio.errorMessage.value"
        label="Data de Início"
        type="date"
        @blur="validarDataInicio"
        @input="validarDataInicio"
      ></v-text-field>
  
      <!-- Data de Fim -->
      <v-text-field
        v-model="dataFim.value.value"
        :error-messages="dataFim.errorMessage.value"
        label="Data de Fim"
        type="date"
        @blur="validarDataFim"
        @input="validarDataFim"
      ></v-text-field>
  
      <!-- Situação -->
      <v-select
        v-model="situacao.value.value"
        :error-messages="situacao.errorMessage.value"
        :items="situacoes"
        label="Situação"
        @blur="validarSituacao"
        @input="validarSituacao"
      ></v-select>
  
      <!-- Botão de Envio -->
      <v-btn class="me-4" type="submit">
        Adicionar
      </v-btn>
    </form>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useField, useForm, defineRule } from 'vee-validate';
  import AlunoController from '@/controllers/AlunoController';
  import EmpresaController from '@/controllers/EmpresaController';
  import OrientadorController from '@/controllers/OrientadorController';
  import { mapSituacaoInverso } from '@/models/enums/SituacaoEnum';
  
  export default {
    props: {
      onSubmit: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      const { handleSubmit } = useForm();
      defineRule('required', (value) => (!value ? 'Este campo é obrigatório' : true));
  
      // Listas para os comboboxes
      const alunosList = ref([]);
      const empresasList = ref([]);
      const orientadoresList = ref([]);
  
      // Carrega dados ao montar o componente
      onMounted(async () => {
        try {
          const alunoController = new AlunoController();
          const empresaController = new EmpresaController();
          const orientadorController = new OrientadorController();
  
          alunosList.value = await alunoController.ObterTodos();
          empresasList.value = await empresaController.ObterTodos();
          orientadoresList.value = await orientadorController.ObterTodos();
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
        }
      });
  
      // Função de filtro personalizada
      const filterItems = (item, queryText, itemText) => {
        const text = itemText.toString().toLowerCase();
        const query = queryText.toLowerCase();
  
        return text.indexOf(query) > -1;
      };
  
      // Definição dos campos com validação
      const aluno = useField('aluno', 'required');
      const empresa = useField('empresa', 'required');
      const orientador = useField('orientador', 'required');
      const situacao = useField('situacao', 'required');
      const dataInicio = useField('dataInicio', 'required');
      const dataFim = useField('dataFim', 'required');
  
      // Opções para o campo de situação
      const situacoes = ref(['Pendente', 'Andamento', 'Renovado']);
  
      // Objeto de requisição
      let requisicao = {
        datIni: '',
        datFim: '',
        situacao: 0,
        empresaId: 0,
        orientadorId: 0,
        alunoId: 0,
      };
  
      // Função de envio do formulário
      const submit = handleSubmit((values) => {
        requisicao.datIni = values.dataInicio;
        requisicao.datFim = values.dataFim;
        requisicao.situacao = mapSituacaoInverso(values.situacao);
        requisicao.alunoId = values.aluno; 
        requisicao.empresaId = values.empresa;
        requisicao.orientadorId = values.orientador; 
  
        props.onSubmit(requisicao);
      });
  
      return {
        aluno,
        alunosList,
        empresa,
        empresasList,
        orientador,
        orientadoresList,
        situacao,
        dataInicio,
        dataFim,
        situacoes,
        filterItems,
        submit,
      };
    },
  };
  </script>