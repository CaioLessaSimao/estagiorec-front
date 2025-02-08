<template>
  <generic-table-view
    :headers="headers"
    :fetchData="fetchEmpresas"
    :filterFunction="empresasFilter"
  >
    <template #actions="{ item }">
      <button class="button-custom" @click="Ordenar(item.Id)">Ver Estágios</button>
    </template>
  </generic-table-view>
</template>
  
<script>
import GenericTableView from '@/components/GenericTableView.vue'
import EmpresaController from '@/controllers/EmpresaController.js'

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
      const empresasController = new EmpresaController();
      return empresasController.ObterTodos();
    },
    empresasFilter(item, query) {
      const q = query.toLowerCase();
      return item.Nome && item.Nome.toLowerCase().includes(q);
    },
    Ordenar(id) {
      this.$router.push({name: 'EstagiosEmpresa', params: {id}});
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

.button-custom:hover{
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.8);
  transform: translateY(-1.5px);
}

</style>