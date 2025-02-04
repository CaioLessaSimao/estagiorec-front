<template>
    <generic-table-view
      :headers="headers"
      :fetchData="fetchEmpresas"
      @delete="handleDelete"
    >
      <template #actions="{ item }">
        <button @click="deleteEmpresa(item.id)">Excluir</button>
      </template>
    </generic-table-view>
  </template>
  
  <script>
  import GenericTableView from '@/components/GenericTableView.vue'
  import EmpresaRepository from '@/models/repository/EmpresaRepository.js'
  
  export default {
    components: {
      GenericTableView
    },
    data() {
      return {
        headers: [
          { key: 'Id', label: 'ID' },
          { key: 'Nome', label: 'Nome' },
        ]
      }
    },
    methods: {
      fetchEmpresas() {
        const empresasRepository = new EmpresaRepository();
        return empresasRepository.ObterTodos();
      },
      handleDelete(id) {
        // TODO: Vamo add algo aqui ainda carma
        console.log('Deletar empresa com id', id)
      }
    }
  }
  </script>