<template>
    <div>
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      ></v-img>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis" id="conta">Matrícula</div>
  
        <v-text-field
          density="compact"
          placeholder="Matrícula"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
  

        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Escreva sua senha"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
    
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Entrar
        </v-btn>
  
      </v-card>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        visible: false,
      }),
    }
  </script>

<style scoped>

div#conta{
    justify-self: left;
}

</style>