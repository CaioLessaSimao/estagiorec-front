<template>
  <div class="ui icon input" style="width: 100%">
    <input type="text" placeholder="Search..." v-model="searchQuery"/>

    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Adicionar"
          variant="flat"
        ></v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card title="Adicionar">
          <GenericFormView
          :fields="fields"
          @submit="(record) => {isActive.value = false; return handleSubmit(record)}"
          />
        </v-card>
      </template>
    </v-dialog>

    <i class="search icon"></i>
  </div>
  <div class="table-container">
    <v-table class="table-content" density="compact" theme="dark" 
    height="100%"
    fixed-header>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" @click="sortBy(header.key)">
            {{ header.label }}
          </th>
          <th v-if="$slots.actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.Id" >
          <td v-for="header in headers" :key="header.key" >
            {{ item[header.key] }}
          </td>
          <td v-if="$slots.actions">
            <slot name="actions" :item="item" >
            </slot>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class = "pagination-controls">
      <button @click="currentPage--" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="currentPage++" :disabled="currentPage === totalPages">Próxima</button>

    <label>Itens por página:
      <select v-model="itemsPerPage">
        <option :value="10">10</option>
        <option :value="20">20</option>
        <option :value="50">50</option>
      </select>
    </label>  
    </div>

  </div>
</template>

<script>
import GenericFormView from './GenericFormView.vue';
export default {
  name: 'GenericTableView',
  components: {
    GenericFormView
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    fetchData: {
      type: Function,
      required: true
    },
    actions: {
      type: Boolean,
      default: true
    },
    filterFunction: {
      type: Function,
    },
    fields: {
      type: Array,
      required: true
    },
    addFunction: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      items: [],
      sortKey: '',
      sortOrder: 'asc',
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: ""
    }
  },
  computed: {
    finalItems() {
      return this.filterFunction && this.searchQuery 
          ? this.items.filter(item => this.filterFunction(item, this.searchQuery)) : 
          this.items;
    },
    sortedItems() {
      if (!this.sortKey) return this.finalItems;
      return this.finalItems.slice().sort((a, b) => {
        const aValue = a[this.sortKey];
        const bValue = b[this.sortKey];
        if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    },
    paginatedItems(){
      const sorted = this.sortedItems;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return sorted.slice(start, end)
    },
    totalPages(){
      return Math.ceil(this.finalItems.length / this.itemsPerPage)
    }
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
    async loadData() {
      try {
        const response = await this.fetchData();
        this.items = response;
      } catch (error) {
        console.error(error);
      }
    },
    async handleSubmit(record) {
      this.addFunction(record);
    },
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 85px); 
  padding: 10px;
}

.table-content {
  flex-grow: 1;
  overflow: auto;
  background: #1e1e1e;
  color: white;
  border-radius: 8px;
}

th {
  background-color: #333;
  color: white;
  padding: 10px;
  cursor: pointer;
  text-align: center !important;
  vertical-align: middle;
}

th:hover {
  background-color: #444;
}

td {
  padding: 10px;
  border-bottom: 1px solid #444;
  text-align: center;
  vertical-align: middle;
}

.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #222;
  border-radius: 8px;
  margin-top: 10px;
}

.pagination-controls button {
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.pagination-controls button:disabled {
  background-color: #555;
  cursor: not-allowed;
}

.pagination-controls select {
  padding: 5px;
  border-radius: 5px;
  background-color: #333;
  color: white;
  border: none;
}

.pagination-controls span{
  color:rgb(255, 255, 255);
}

.pagination-controls label{
  color:rgb(255, 255, 255);
}
</style>