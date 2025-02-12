<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <template v-for="field in fields" :key="field.key">
                <v-text-field
                v-model="record[field.key]"
                :label="field.label"
                :rules="[rules.required]"
                :required="field.required || false"
                ></v-text-field>
            </template>
            <v-btn color="primary" @click="submitEdit" :disabled="!valid">
                Salvar
            </v-btn>
        </v-form>
        <v-btn color="red" dark class="mt-4" @click="confirmarExclusao">
            Excluir
        </v-btn>
    </v-container>
</template>
  
<script>
export default {
    name: 'GenericEdit',
    props: {
        entityId: {
            type: [String, Number],
            required: true
        },
        fetchData: {
            type: Function,
            required: true
        },
        updateData: {
            type: Function,
            required: true
        },
        deleteData: {
            type: Function,
            required: false
        },
        fields: {
            type: Array,
            required: true
        },
        redirectRoute: {
            type: [String, Object],
            required: true
        },
    },
    data() {
        return {
            record: {},
            valid: false,
            rules: {
                required: value => !!value || 'Este campo é obrigatório'
            }
        }
    },
    mounted() {
        this.loadRecord();
    },
    methods: {
        async loadRecord() {
        try {
            const data = await this.fetchData(this.entityId);
            this.record = data;
        } catch (error) {
            console.error("Erro ao carregar registro:", error);
        }
        },
        async submitEdit() {
            if (this.$refs.form.validate()) {
                try {
                    await this.updateData(this.record);
                    this.$router.push({ name: this.redirectRoute, params: this});
                } catch (error) {
                    console.error("Erro ao atualizar registro:", error);
                }
            }
        },
        async submitDelete() {
            try {
                await this.deleteData(this.entityId);
                this.$router.push({ name: this.redirectRoute, params: this});
            } catch (error) {
                console.error("Erro ao deletar registro:", error);
                alert('Não é possível apagar pois possui estágio associado. Apague o(s) estágio(s) primeiro.');
            }
        },
        async confirmarExclusao() {
            if (window.confirm('Tem certeza que deseja excluir este registro?')) {
                await this.submitDelete();
            }
        }

    }
}
</script>