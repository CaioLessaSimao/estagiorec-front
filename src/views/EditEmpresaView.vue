<template>
    <GenericEdit
      :entityId="$route.params.id"
      :fetchData="fetchEmpresa"
      :updateData="atualizarEmpresa"
      :deleteData="deletarEmpresa"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
      ]"
      redirectRoute='Empresas'
    />
</template>
  
<script>
import GenericEdit from '@/components/GenericEdit.vue'
import EmpresaController from '@/controllers/EmpresaController.js'

export default {
    components: { GenericEdit },
    methods: {
      async fetchEmpresa(id) {
        const empresaController = new EmpresaController();
        return await empresaController.Obter(id);
      },
      async atualizarEmpresa(record) {
        const empresaController = new EmpresaController();
        await empresaController.Atualizar({
            id: record.Id,
            nome: record.Nome,
        });
      },
      async deletarEmpresa(id) {
        const empresaController = new EmpresaController();
        await empresaController.Deletar(id);
      },
    }
}
</script>