<template>
  <div>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchEmpresa"
      :updateData="atualizarEmpresa"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
      ]"
      redirectRoute='Empresas'
    />
    <v-btn color="red" dark class="mt-4" @click="confirmarExclusao">
      Excluir Empresa
    </v-btn>
  </div>
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import EmpresaController from '@/controllers/EmpresaController.js'

export default {
    components: { GenericEditView },
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
      async confirmarExclusao() {
        if (window.confirm('Tem certeza que deseja excluir esta empresa?')) {
          await this.deletarEmpresa(this.$route.params.id);
          this.$router.push({ name: 'Empresas' });
        }
      }
    }
}
</script>