<template>
  <router-link to='/alunos'>Alunos</router-link>
  <router-link to='/orientadores'>Orientadores</router-link>
  <router-link to='/empresas'>Empresas</router-link>
  <div>
    <router-view></router-view>
  </div>
</template>

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
