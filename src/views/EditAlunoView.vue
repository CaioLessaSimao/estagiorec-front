<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="aluno.Nome"
                label="Nome"
                :rules="[rules.required]"
                required
            ></v-text-field>
            <v-text-field
                v-model="aluno.Matricula"
                label="Matrícula"
                :rules="[rules.required]"
                required
            ></v-text-field>
            <v-btn color="primary" @click="atualizarAluno" :disabled="!valid">
                Salvar
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import AlunoController from '@/controllers/AlunoController.js'

export default {
    name: 'EditAlunoView',
    data() {
        return {
            aluno: {
                Id: null,
                Nome: '',
                Matricula: ''
            },
            valid: false,
            rules: {
                required: value => !!value || 'Este campo é obrigatório'
            }
        }
    },
    mounted() {
        // Pega o id do aluno passado na rota
        const id = this.$route.params.id;
        const alunosController = new AlunoController();
        // Opcional: buscar os dados atuais do aluno para preencher o formulário
        alunosController.Obter(id).then(response => {
            this.aluno = {
                Id: response.Id,
                Nome: response.Nome,
                Matricula: response.Matricula
            }
        }).catch(error => {
            console.error("Erro ao buscar aluno:", error);
        });
    },
    methods: {
        async atualizarAluno() {
            const alunosController = new AlunoController();
            try {
                await alunosController.Atualizar({
                    id: this.aluno.Id,
                    nome: this.aluno.Nome,
                    matricula: this.aluno.Matricula
                });
                // Após atualizar, redireciona para a lista de alunos
                this.$router.push({ name: 'Alunos' });
            } catch (error) {
                console.error("Erro ao atualizar o aluno:", error);
            }
        }
    }
}
</script>