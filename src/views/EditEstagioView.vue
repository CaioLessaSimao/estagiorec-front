<template>
    <GenericEdit
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagio"
      :deleteData="deletarEstagio"
      :fields="[
        { key: 'Situacao', label: 'Situação', required: true }
      ]"
      redirectRoute='Estagios'
    />
</template>

<script>
import GenericEdit from '@/components/GenericEdit.vue'
import EstagioController from '@/controllers/EstagioController.js'
import { mapSituacao, mapSituacaoInverso } from "@/models/enums/SituacaoEnum.js";

export default {
  components: { GenericEdit },
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
  }
}
</script>