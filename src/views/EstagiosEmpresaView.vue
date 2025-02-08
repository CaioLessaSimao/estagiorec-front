<template>
    <div class="ui icon input" style="width: 100%">
      <input type="text" placeholder="Search..." />
      <i class="search icon"></i>
    </div>
    <generic-table-view
      :ordenar="ordenar"
      :headers="headers"
      :fetchData="fetchEstagios"
      @delete="handleDelete"
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
        return estagiosController.ObterPorEmpresa(this.$route.params.id);
      },
      handleDelete(id) {
        // TODO: Vamo add algo aqui ainda carma
        console.log('Deletar estagio com id', id)
      },

    }
  }
  </script>