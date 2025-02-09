<template>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEstagio"
      :updateData="atualizarEstagio"
      :fields="[
        { key: 'Situacao', label: 'Situacao', required: true },
      ]"
      redirectRoute='Estagios'
    />
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import EstagioController from '@/controllers/EstagioController.js'

export default {
    components: { GenericEditView },
    methods: {
      fetchEstagio(id) {
        const estagioController = new EstagioController();
        return estagioController.Obter(id);
      },
      async atualizarEstagio(record) {
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
      }
    }
}
</script>