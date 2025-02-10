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
            <v-btn color="primary" @click="submit" :disabled="!valid">
                Salvar
            </v-btn>
        </v-form>
    </v-container>
</template>
  
<script>
export default {
    name: 'GenericEditView',
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
            required: false // TODO: Alterar para true :D (QUEM VER ESSA DSGÇ PODE ALTERAR ESSA CARAIA)
        },
        fields: {
            type: Array,
            required: true
        },
        redirectRoute: {
            type: [String, Object],
            required: true
        },
        redirectParams: {
            type: Object,
            default: () => ({})
        }
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
        async submit() {
        if (this.$refs.form.validate()) {
            try {
                await this.updateData(this.record);
                this.$router.push({ name: this.redirectRoute, params: this});
            } catch (error) {
                console.error("Erro ao atualizar registro:", error);
            }
        }
        }
    }
}
</script>