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
    name: 'EditEmpresa',
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
        const id = this.$route.params.id;
        this.loadEmpresa(id);
    },
    methods: {
        async atualizarEmpresa() {
            const empresasController = new EmpresaController();
            try {
                await empresasController.Atualizar({
                    id: this.empresa.Id,
                    nome: this.empresa.Nome,
                });
                this.$router.push({ name: 'Empresas' });
            } catch (error) {
                console.error("Erro ao atualizar a empresa:", error);
            }
        },
        async loadEmpresa(id) {
            try{
                const empresasController = new EmpresaController();
                this.empresa = await empresasController.Obter(id);
            } catch (error) {
                console.error("Erro ao carregar a empresa:", error);
            }
        }
    }
}
</script>