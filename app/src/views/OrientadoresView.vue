<template>
    <generic-table-view
      :headers="headers"
      :fetchData="fetchOrientadores"
      @delete="handleDelete"
    >
      <template #actions="{ item }">
        <button @click="deleteOrientador(item.id)">Excluir</button>
      </template>
    </generic-table-view>
  </template>
  
<script>
import GenericTableView from '@/components/GenericTableView.vue'
import OrientadorRepository from '@/models/repository/OrientadorRepository.js'
  
export default {
    components: {
      GenericTableView
    },
    data() {
      return {
        headers: [
          { key: 'id', label: 'ID' },
          { key: 'nome', label: 'Nome' },
          { key: 'email', label: 'Email' },
          { key: 'telefone', label: 'Telefone' },
        ]
      }
    },
    methods: {
      fetchOrientadores() {
        const orientadoresRepository = new OrientadorRepository();
        return orientadoresRepository.ObterTodos();
      },
      handleDelete(id) {
        // TODO: Vamo add algo aqui ainda carma
        console.log('Deletar orientador com id', id)
      }
    }
}
</script>