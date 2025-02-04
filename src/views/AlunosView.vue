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
import AlunoRepository from '@/models/repository/AlunoRepository.js'

export default {
  components: {
    GenericTableView
  },
  data() {
    return {
      headers: [
        { key: 'Id', label: 'ID' },
        { key: 'Nome', label: 'Nome' },
        { key: 'Matricula', label: 'Matrícula' },
      ]
    }
  },
  methods: {
    fetchAlunos() {
      const alunosRepository = new AlunoRepository();
      return alunosRepository.ObterTodos();
    },
    handleDelete(id) {
      // TODO: Vamo add algo aqui ainda carma
      console.log('Deletar aluno com id', id)
    }
  }
}
</script>