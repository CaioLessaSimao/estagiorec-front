<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <template v-for="field in fields" :key="field.key">
                <v-text-field
                :label="field.label"
                :required="field.required || false"
                ></v-text-field>
            </template>
        </v-form>
    </v-container>
</template>
  
<script>
export default {
    name: "GenericFormView",
    props: {
        fields: {
        type: Array,
        required: true
        },
    }
}

</script>