<template>
    <div class="ui icon input" style="width: 100%">
      <input type="text" placeholder="Search..." />
      <i class="search icon"></i>
    </div>
    <generic-table-view
      :headers="headers"
      :fetchData="fetchEstagios"
      @delete="handleDelete"
    >
      <template #actions="{ item }">
        <button @click="deleteEstagio(item.id)">Excluir</button>
      </template>
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
          { key: 'Aluno', label: 'Aluno' },
          { key: "DatIni",      label: "DatIni" },
          { key: "DatFim",      label: "DatFim" },
          { key: "Situacao",    label: "Situacao" },
          { key: "Aluno",       label: "Aluno" },
          { key: "AlunoId",     label: "AlunoId" },
          { key: "Orientador",  label: "Orientador" },
          { key: "OrientadorId",label: "OrientadorId" },
          { key: "Empresa",     label: "Empresa" },
          { key: "EmpresaId",   label: "EmpresaId" }
        ]
      };
    },
    methods: {
      fetchEstagios() {
        const estagiosController = new EstagioController();
        return estagiosController.ObterTodos();
      },
      handleDelete(id) {
        // TODO: Vamo add algo aqui ainda carma
        console.log('Deletar estagio com id', id)
      }
    }
  }
  </script>