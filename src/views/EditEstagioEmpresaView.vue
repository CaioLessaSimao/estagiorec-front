<template>
  <div>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagioEmpresa"
      :fields="[
        { key: 'Situacao', label: 'Situacao', required: true },
      ]"
      redirectRoute='EstagiosEmpresa'
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
        return record;
      },
      async atualizarEstagioEmpresa(record) {
        const estagioController = new EstagioController();
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
      async deletarEstagioEmpresa(id) {
        const estagioController = new EstagioController();
        await estagioController.Deletar(id);
      },
      async confirmarExclusao() {
        if (window.confirm('Tem certeza que deseja excluir este estagio?')) {
          await this.deletarEstagioEmpresa(this.$route.params.id);
          this.$router.push({ name: 'Estagios' });
        }
      }
    }
}
</script>