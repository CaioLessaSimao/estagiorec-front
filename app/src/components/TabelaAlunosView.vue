<!-- src/components/TableComponent.vue -->
<template>
    <div>
      <table>
        <thead>
          <tr>
            <th @click="sortBy('nome')">Nome</th>
            <th @click="sortBy('Matricula')">Matricula</th>
            <th @click="sortBy('Orientador')">Orientador</th>
            <th @click="sortBy('Empresa')">Empresa</th>
            <th @click="sortBy('Situacao')">Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortedItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button @click="deleteItem(item.id)">Excluir</button>
            </td>
            <td>
              <button @click="teste">Matheus</button>
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
        items: [
          { id: 1, name: 'João Silva', age: 25, email: 'joao.silva@example.com' },
          { id: 2, name: 'Maria Oliveira', age: 30, email: 'maria.oliveira@example.com' },
          { id: 3, name: 'Pedro Souza', age: 22, email: 'pedro.souza@example.com' },
          { id: 4, name: 'Ana Costa', age: 28, email: 'ana.costa@example.com' },
        ],
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
      deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
      },
      teste(){
        console.log(TabelaAlunos.PreencherTabela());
      }
    },
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