<template>
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
      }
    }
}
</script>