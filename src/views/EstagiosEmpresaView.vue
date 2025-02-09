<template>
  <generic-table-view
    :headers="headers"
    :fetchData="fetchEstagios"
    :filterFunction="estagiosFilter"
  >
  </generic-table-view>
</template>
    
<script>
import GenericTableView from '@/components/GenericTableView.vue'
import EstagioController from '@/controllers/EstagioController.js'

export default {
  components: {
    GenericTableView
  },
  data() {
    return {
      headers: [
        { key: 'Id',              label: 'ID' },
        { key: 'AlunoNome',       label: 'Aluno' },
        { key: 'AlunoMatricula',  label: 'Matrícula'},
        { key: "OrientadorNome",  label: "Orientador" },
        { key: "EmpresaNome",     label: "Empresa" },
        { key: "DatIni",          label: "DatIni" },
        { key: "DatFim",          label: "DatFim" },
        { key: "Situacao",        label: "Situacao" },
      ]
    };
  },
  methods: {
    fetchEstagios() {
      const estagiosController = new EstagioController();
      return estagiosController.ObterPorEmpresa(this.$route.params.id);
    },
    estagiosFilter(item, query) {
      const q = query.toLowerCase();
      return item.AlunoNome && item.AlunoNome.toLowerCase().includes(q) ||
        item.AlunoMatricula && item.AlunoMatricula.toLowerCase().includes(q) ||
        item.OrientadorNome && item.OrientadorNome.toLowerCase().includes(q) ||
        item.EmpresaNome && item.EmpresaNome.toLowerCase().includes(q)
    }
  }
}
</script>