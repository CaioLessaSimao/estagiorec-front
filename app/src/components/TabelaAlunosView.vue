<!-- src/components/TableComponent.vue -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortBy('nome')">Nome</th>
          <th @click="sortBy('matricula')">Matricula</th>
          <th @click="sortBy('orientador')">Orientador</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.matricula }}</td>
          <td>
            <button @click="deleteItem(item.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TabelaAlunos from '@/models/TabelaAlunosModel';

export default {
  data() {
    return {
      items: [],
      sortKey: '',
      sortOrder: 'asc',
    };
  },
  computed: {
    sortedItems() {
      if (!this.sortKey) return this.items;

      return this.items.slice().sort((a, b) => {
        const aValue = a[this.sortKey];
        const bValue = b[this.sortKey];

        if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    },
  },
  methods: {
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
    deleteItem(matricula) {
      this.items = this.items.filter(item => item.matricula !== matricula);
    },
    async preencherTabela() {
      try {
        const response = await TabelaAlunos.PreencherTabela();
        this.items = response;
      } catch (error) {
        console.error(error);
      }	
    }
  },
  mounted() {
    this.preencherTabela();
    console.log(this.items);
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  cursor: pointer;
}

th:hover {
  background-color: #e0e0e0;
}

button {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #cc0000;
}
</style>