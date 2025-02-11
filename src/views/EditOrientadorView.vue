<template>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchOrientador"
      :updateData="atualizarOrientador"
      :deleteData="deletarOrientador"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
        { key: 'Email', label: 'Email', required: true },
        { key: 'Telefone', label: 'Telefone', required: true }
      ]"
      redirectRoute='Orientadores'
    />
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import OrientadorController from '@/controllers/OrientadorController.js'

export default {
    components: { GenericEditView },
    methods: {
      async fetchOrientador(id) {
        const orientadorController = new OrientadorController();
        return await orientadorController.Obter(id);
      },
      async atualizarOrientador(record) {
        const orientadorController = new OrientadorController();
        await orientadorController.Atualizar({
            id: record.Id,
            nome: record.Nome,
            email: record.Email,
            telefone: record.Telefone
        });
      },
      async deletarOrientador(id) {
        const orientadorController = new OrientadorController();
        await orientadorController.Deletar(id);
      },
    }
}
</script>