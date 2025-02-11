<template>
  <div>
    <GenericEditView
      :entityId="$route.params.id"
      :fetchData="fetchAluno"
      :updateData="atualizarAluno"
      :fields="[
        { key: 'Nome', label: 'Nome', required: true },
        { key: 'Matricula', label: 'Matrícula', required: true }
      ]"
      redirectRoute='Alunos'
    />
    <v-btn color="red" dark class="mt-4" @click="confirmarExclusao">
      Excluir Aluno
    </v-btn>
  </div>
</template>
  
<script>
import GenericEditView from '@/components/GenericEditView.vue'
import AlunoController from '@/controllers/AlunoController.js'

export default {
    components: { GenericEditView },
    methods: {
      async fetchAluno(id) {
        const alunoController = new AlunoController();
        return await alunoController.Obter(id);
      },
      async atualizarAluno(record) {
        const alunoController = new AlunoController();
        await alunoController.Atualizar({
          id: record.Id,
          nome: record.Nome,
          matricula: record.Matricula
        });
      },
      async deletarAluno(id) {
        const alunoController = new AlunoController();
        await alunoController.Deletar(id);
      },
      async confirmarExclusao() {
        if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
          await this.deletarAluno(this.$route.params.id);
          this.$router.push({ name: 'Alunos' });
        }
      }
    }
  }

</script>