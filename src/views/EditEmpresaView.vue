<template>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEmpresa"
      :updateData="atualizarEmpresa"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
      ]"
      redirectRoute='Empresas'
    />
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import EmpresaController from '@/controllers/EmpresaController.js'

export default {
    components: { GenericEditView },
    methods: {
      fetchEmpresa(id) {
        const empresaController = new EmpresaController();
        return empresaController.Obter(id);
      },
      async atualizarEmpresa(record) {
        const empresaController = new EmpresaController();
        await empresaController.Atualizar({
            id: record.Id,
            nome: record.Nome,
        });
      }
    }
}
</script>