<template>
  <generic-table-view
    ref="genericTable"
    :headers="headers"
    :fetchData="fetchAlunos"
    :filterFunction="alunosFilter"
    :fields="[
        { key: 'Nome', label: 'Nome', required: true },
        { key: 'Matricula', label: 'Matrícula', required: true }
      ]"
    :Adicionar="Adicionar"
    @Ordenar="Ordenar"
  >
  
    <template #actions="{ item }">
      <button class="button-custom" @click="Ordenar(item.Id)">Ver Estágios</button>
      <button class="button-custom" @click="editarAluno(item)">Editar</button>
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
    alunosFilter(item, query) {
      const q = query.toLowerCase();
      return item.Nome && item.Nome.toLowerCase().includes(q) ||
        item.Matricula && item.Matricula.toLowerCase().includes(q)
    },
    Ordenar(id) {
      this.$router.push({name: 'EstagiosAluno', params: {id}});
    },
    editarAluno(aluno) {
      this.$router.push({ name: 'EditAluno', params: { id: aluno.Id } });
    },
    Adicionar(){
      console.log("Ta funcionando")
    }

  }
}
</script>

<style scoped>
.button-custom{
  background-color: #757474;
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.button-custom + .button-custom {
  margin-left: 7px;
}

.button-custom:hover{
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.8);
  transform: translateY(-1.5px);
}

</style>