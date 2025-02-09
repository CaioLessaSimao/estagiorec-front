<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="orientador.Nome"
            label="Nome"
            :rules="[rules.required]"
            required
        ></v-text-field>
        <v-text-field
            v-model="orientador.Email"
            label="Email"
            :rules="[rules.required]"
            required
        ></v-text-field>
        <v-text-field
            v-model="orientador.Telefone"
            label="Telefone"
            :rules="[rules.required]"
            required
        ></v-text-field>
        <v-btn color="primary" @click="atualizarOrientador" :disabled="!valid">
            Salvar
        </v-btn>
        </v-form>
    </v-container>
    </template>

    <script>
    import OrientadorController from '@/controllers/OrientadorController.js'

    export default {
    name: 'EditOrientadorView',
    data() {
        return {
        orientador: {
            Id: null,
            Nome: '',
            Email: '',
            Telefone: ''
        },
        valid: false,
        rules: {
            required: value => !!value || 'Este campo é obrigatório'
        }
        }
    },
    mounted() {
        const id = this.$route.params.id;
        const orientadoresController = new OrientadorController();
        orientadoresController.Obter(id).then(response => {
        this.orientador = {
            Id: response.Id,
            Nome: response.Nome,
            Email: response.Email,
            Telefone: response.Telefone
        }
        }).catch(error => {
        console.error("Erro ao buscar orientador:", error);
        });
    },
    methods: {
        async atualizarOrientador() {
        const orientadoresController = new OrientadorController();
        try {
            await orientadoresController.Atualizar({
            id: this.orientador.Id,
            nome: this.orientador.Nome,
            email: this.orientador.Email,
            telefone: this.orientador.Telefone
            });
            this.$router.push({ name: 'Orientadores' });
        } catch (error) {
            console.error("Erro ao atualizar orientador:", error);
        }
        }
    }
}
</script>