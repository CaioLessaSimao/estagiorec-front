<template>
  <div>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchOrientador"
      :updateData="atualizarOrientador"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
        { key: 'Email', label: 'Email', required: true },
        { key: 'Telefone', label: 'Telefone', required: true }
      ]"
      redirectRoute='Orientadores'
    />
    <v-btn color="red" dark class="mt-4" @click="confirmarExclusao">
      Excluir Orientador
    </v-btn>
  </div>
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
      async confirmarExclusao() {
        if (window.confirm('Tem certeza que deseja excluir este orientador?')) {
          await this.deletarOrientador(this.$route.params.id);
          this.$router.push({ name: 'Orientadores' });
        }
      }
    }
}
</script>