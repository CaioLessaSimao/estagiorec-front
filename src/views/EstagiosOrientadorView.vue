<template>
  <generic-table
    :headers="headers"
    :fetchData="fetchEstagios"
    :filterFunction="estagiosFilter"
    :notEstagio="notEstagio"
  >
  <template #actions="{ item }">
    <button class="button-custom" @click="editarEstagioOrientador(item)">Editar</button>
  </template>
  </generic-table>
</template>
    
<script>
import GenericTable from '@/components/GenericTable.vue'
import EstagioController from '@/controllers/EstagioController.js'
import { mapSituacao } from "@/models/enums/SituacaoEnum.js";

export default {
  components: {
    GenericTable
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
    async fetchEstagios() {
      const estagiosController = new EstagioController();
      const registros = await estagiosController.ObterPorOrientador(this.$route.params.id);

      registros.forEach(item => {
          item.Situacao = mapSituacao(item.Situacao);
        }
      );
      return registros;
    },
    estagiosFilter(item, query) {
      const q = query.toLowerCase();
      return item.AlunoNome && item.AlunoNome.toLowerCase().includes(q) ||
        item.AlunoMatricula && item.AlunoMatricula.toLowerCase().includes(q) ||
        item.OrientadorNome && item.OrientadorNome.toLowerCase().includes(q) ||
        item.EmpresaNome && item.EmpresaNome.toLowerCase().includes(q)
    },
    editarEstagioOrientador(estagio){
      this.$router.push({name: 'EditEstagioOrientador', params: {id: estagio.Id}});
    },
    notEstagio(){
      return false;
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