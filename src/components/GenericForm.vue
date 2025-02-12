<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <template v-for="field in fields" :key="field.key">
                <v-text-field
                    v-model="record[field.key]"
                    :label="field.label"
                    :required="field.required || false"
                ></v-text-field>
            </template>
            <v-row justify="end">
                <v-col cols="auto">
                    <v-btn color="primary" @click="submit" :disabled="!valid">
                        Adicionar
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
  
<script>
export default {
    name: "GenericForm",
    props: {
        fields: {
        type: Array,
        required: true
        },
    },
    data() {
        return {
            record: {},
            valid: false,
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$emit('submit', this.record);
            }
        }
    }

}

</script>