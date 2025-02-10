<template>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagioEmpresa"
      :fields="[
        { key: 'Situacao', label: 'Situacao', required: true },
      ]"
      redirectRoute='EstagiosEmpresa'
    />
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import EstagioController from '@/controllers/EstagioController.js'

export default {
    components: { GenericEditView },
    methods: {
      async fetchEstagio(id) {
        const estagioController = new EstagioController();
        return await estagioController.Obter(id);
      },
      async atualizarEstagioEmpresa(record) {
        const estagioController = new EstagioController();
        await estagioController.Atualizar({
            id: record.Id,
            datIni: record.DatIni,
            dateFim: record.DatFim,
            situacao: parseInt(record.Situacao),
            alunoId: record.AlunoId,
            empresaId: record.EmpresaId,
            orientadorId: record.OrientadorId,
        });
      },
      async deletarEstagioEmpresa(id) {
        const estagioController = new EstagioController();
        await estagioController.Deletar(id);
      }
    }
}
</script>