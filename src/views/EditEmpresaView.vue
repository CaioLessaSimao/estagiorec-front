<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="empresa.Nome"
                label="Nome"
                :rules="[rules.required]"
                required
            ></v-text-field>
            <v-btn color="primary" @click="atualizarEmpresa" :disabled="!valid">
                Salvar
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import EmpresaController from '@/controllers/EmpresaController.js'

export default {
    name: 'EditEmpresaView',
    data() {
        return {
            empresa: {
                Id: null,
                Nome: '',
            },
            valid: false,
            rules: {
                required: value => !!value || 'Este campo é obrigatório'
            }
        }
    },
    mounted() {
        // Pega o id do empresa passado na rota
        const id = this.$route.params.id;
        const empresasController = new EmpresaController();
        // Opcional: buscar os dados atuais do empresa para preencher o formulário
        empresasController.Obter(id).then(response => {
            this.empresa = {
                Id: response.Id,
                Nome: response.Nome,
            }
        }).catch(error => {
            console.error("Erro ao buscar empresa:", error);
        });
    },
    methods: {
        async atualizarEmpresa() {
            const empresasController = new EmpresaController();
            try {
                await empresasController.Atualizar({
                    id: this.empresa.Id,
                    nome: this.empresa.Nome,
                });
                // Após atualizar, redireciona para a lista de empresas
                this.$router.push({ name: 'Empresas' });
            } catch (error) {
                console.error("Erro ao atualizar a empresa:", error);
            }
        }
    }
}
</script>