<template>
  <generic-table-view
    :headers="headers"
    :fetchData="fetchAlunos"
    @delete="handleDelete"
  >
    <template #actions="{ item }">
      <button @click="deleteAluno(item.id)">Excluir</button>
    </template>
  </generic-table-view>
</template>

<script>
import GenericTableView from '@/components/GenericTableView.vue'
import TabelaAlunos from '@/models/TabelaAlunosModel'

export default {
  components: {
    GenericTableView
  },
  data() {
    return {
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'nome', label: 'Nome' },
        { key: 'matricula', label: 'Matrícula' },
      ]
    }
  },
  methods: {
    fetchAlunos() {
      const alunosView = new TabelaAlunos();
      return alunosView.ObterTodos();
    },
    handleDelete(id) {
      // TODO: Vamo add algo aqui ainda carma
      console.log('Deletar aluno com id', id)
    }
  }
}
</script>