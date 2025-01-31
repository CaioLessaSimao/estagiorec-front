<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AlunosView/>
</template>

<script>
//import LoginView from './components/LoginView.vue';
import AlunosView from './views/AlunosView.vue';

export default {
  name: 'App',
  components: {
    AlunosView
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
