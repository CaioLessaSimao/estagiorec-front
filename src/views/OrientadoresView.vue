<template>
  <div class="ui icon input" style="width: 100%">
    <input type="text" placeholder="Search..." v-model="searchQuery"/>
    <i class="search icon"></i>
  </div>
  <generic-table-view
    :headers="headers"
    :fetchData="fetchOrientadores"
    :searchQuery="searchQuery"
    :filterFunction="orientadoresFilter"
  >
    <template #actions="{ item }">
      <button class="button-custom" @click="Ordenar(item.Id)">Ver Estágios</button>
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
      ],
      searchQuery: ""
    }
  },
  methods: {
    fetchOrientadores() {
      const orientadoresController = new OrientadorController();
      return orientadoresController.ObterTodos();
    },
    orientadoresFilter(item, query) {
      const q = query.toLowerCase();
      return item.Nome && item.Nome.toLowerCase().includes(q) ||
        item.Email && item.Email.toLowerCase().includes(q) ||
        item.Telefone && item.Telefone.toLowerCase().includes(q)
    },
    Ordenar(id) {
      this.$router.push({name: 'EstagiosOrientador', params: {id}});
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