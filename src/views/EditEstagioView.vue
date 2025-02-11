<template>
  <div>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagio"
      :fields="[
        { key: 'Situacao', label: 'Situação', required: true }
      ]"
      redirectRoute='Estagios'
    />
    <v-btn color="red" dark class="mt-4" @click="confirmarExclusao">
      Excluir Estagio
    </v-btn>
  </div>
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import EstagioController from '@/controllers/EstagioController.js'
import { mapSituacao, mapSituacaoInverso } from "@/models/enums/SituacaoEnum.js";

export default {
  components: { GenericEditView },
  methods: {
    async fetchEstagio(id) {
      const estagioController = new EstagioController();
      const record = await estagioController.Obter(id);
      record.Situacao = mapSituacao(record.Situacao);
      console.log(record);
      return record;
    },
    async atualizarEstagio(record) {
      const estagioController = new EstagioController();
      console.log(record.DatFim);

      await estagioController.Atualizar({
        id: record.Id,
        datIni: record.DatIni,
        datFim: record.DatFim,
        situacao: mapSituacaoInverso(record.Situacao),
        alunoId: record.AlunoId,
        empresaId: record.EmpresaId,
        orientadorId: record.OrientadorId,
      });
    },
    async deletarEstagio(id) {
      const estagioController = new EstagioController();
      await estagioController.Deletar(id);
    },
    async confirmarExclusao() {
        if (window.confirm('Tem certeza que deseja excluir este estagio?')) {
          await this.deletarEstagio(this.$route.params.id);
          this.$router.push({ name: 'Estagios' });
        }
      }
  }
}
</script>