<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="estagio.Situacao"
                label="Situacao"
                :rules="[rules.required]"
                required
            ></v-text-field>
            <v-btn color="primary" @click="atualizarEstagio" :disabled="!valid">
                Salvar
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import EstagioController from '@/controllers/EstagioController.js'

export default {
    name: 'EditEstagio',
    data() {
        return {
            estagio: {
                Id: null,
                Situacao: '',
                DatIni: null,
                DatFim: null,
                AlunoId: null,
                EmpresaId: null,
                OrientadorId: null
            },
            valid: false,
            rules: {
                required: value => !!value || 'Este campo é obrigatório'
            }
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.loadEstagio(id);
    },
    methods: {
        async atualizarEstagio() {
            const estagiosController = new EstagioController();
            
            console.log(this.estagio.AlunoId, this.estagio.EmpresaId, this.estagio.OrientadorId, this.estagio.Situacao, this.estagio.DatIni, this.estagio.DatFim);
            try {
                await estagiosController.Atualizar({
                    id: this.estagio.Id,
                    datIni: this.estagio.DatIni,
                    dateFim: this.estagio.DatFim,
                    situacao: parseInt(this.estagio.Situacao),
                    alunoId: this.estagio.AlunoId,
                    empresaId: this.estagio.EmpresaId,
                    orientadorId: this.estagio.OrientadorId,
                });
                this.$router.push({ name: 'Estagios' });
            } catch (error) {
                console.error("Erro ao atualizar o estagio:", error);
            }
        },

        async loadEstagio(id) {
            try {
                const estagiosController = new EstagioController();
                this.estagio = await estagiosController.Obter(id);
            } catch(error) {
                console.error("Erro ao carregar o estagio:", error);
            }
        }
    }
}
</script>