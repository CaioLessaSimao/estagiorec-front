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
import OrientadorController from '@/controllers/OrientadorController.js'
  
export default {
  components: {
    GenericTableView
  },
  data() {
    return {
      headers: [
        { key: 'Id', label: 'ID' },
        { key: 'Nome', label: 'Nome' },
        { key: 'Email', label: 'Email' },
        { key: 'Telefone', label: 'Telefone' },
      ]
    }
  },
  methods: {
    fetchOrientadores() {
      const orientadoresController = new OrientadorController();
      return orientadoresController.ObterTodos();
    },
    handleDelete(id) {
      // TODO: Vamo add algo aqui ainda carma
      console.log('Deletar orientador com id', id)
    }
  }
}
</script>