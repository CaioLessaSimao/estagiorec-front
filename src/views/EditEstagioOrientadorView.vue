<template>
    <GenericEdit
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagioOrientador"
      :deleteData="deletarEstagioOrientador"
      :fields="[
        { key: 'Situacao', label: 'Situacao', required: true },
      ]"
      redirectRoute='EstagiosOrientador'
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
        return record;
      },
      async atualizarEstagioOrientador(record) {
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
      async deletarEstagioOrientador(id) {
        const estagioController = new EstagioController();
        await estagioController.Deletar(id);
      },
    }
}
</script>