<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" @click="sortBy(header.key)">
            {{ header.label }}
          </th>
          <th v-if="actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedItems" :key="item.id">
          <td v-for="header in headers" :key="header.key">
            {{ item[header.key] }}
          </td>
          <td v-if="actions">
            <slot name="actions" :item="item">
              <button @click="deleteItem(item.id)">Excluir</button>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GenericTableView',
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
    }
  },
  data() {
    return {
      items: [],
      sortKey: '',
      sortOrder: 'asc'
    }
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
    deleteItem(id) {
      this.$emit('delete', id);
    },
    async loadData() {
      try {
        const response = await this.fetchData();
        this.items = response;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.loadData();
  }
}
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