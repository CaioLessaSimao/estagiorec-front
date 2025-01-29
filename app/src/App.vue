<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TabelaAlunosView/>
</template>

<script>
//import LoginView from './components/LoginView.vue';
import TabelaAlunosView from './components/TabelaAlunosView.vue';

export default {
  name: 'App',
  components: {
    TabelaAlunosView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
