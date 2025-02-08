<template>
    <generic-table-view
      :headers="headers"
      :fetchData="fetchEstagios"
    >
    </generic-table-view>
  </template>
    
  <script>
  import GenericTableView from '@/components/GenericTableView.vue'
  import EstagioController from '@/controllers/EstagioController.js'
  
  export default {
    components: {
      GenericTableView
    },
    data() {
      return {
        headers: [
          { key: 'Id',              label: 'ID' },
          { key: 'AlunoNome',       label: 'Aluno' },
          { key: 'AlunoMatricula',  label: 'Matrícula'},
          { key: "OrientadorNome",  label: "Orientador" },
          { key: "EmpresaNome",     label: "Empresa" },
          { key: "DatIni",          label: "DatIni" },
          { key: "DatFim",          label: "DatFim" },
          { key: "Situacao",        label: "Situacao" },
        ]
      };
    },
    methods: {
      fetchEstagios() {
        const estagiosController = new EstagioController();
        return estagiosController.ObterPorOrientador(this.$route.params.id);
      },
    }
  }
  </script>