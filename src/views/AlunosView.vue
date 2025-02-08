<template>
  <generic-table-view
    :headers="headers"
    :fetchData="fetchAlunos"
    @Ordenar="Ordenar"
  >
  
    <template #actions="{ item }">
      <button class="button-custom" @click="Ordenar(item.Id)">Ver Estágios</button>
    </template>
  
  </generic-table-view>
</template>

<script>
import GenericTableView from '@/components/GenericTableView.vue'
import AlunoController from '@/controllers/AlunoController.js'

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
      const alunosController = new AlunoController();
      return alunosController.ObterTodos();
    },
    Ordenar(id) {
      this.$router.push({name: 'EstagiosAluno', params: {id}});
    }
  }
}
</script>

<style scoped>
.button-custom{
  background-color: #007BFF;
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.button-custom:hover{
  box-shadow: 0 0px 10px rgba(0, 123,255,0.8);
  transform: translateY(1.05);
}

</style>