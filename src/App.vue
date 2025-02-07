<template>
<v-app :theme="isDark ? 'dark' : 'light'">
    <!-- Navbar -->
    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Minha Navbar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        <router-link to='/alunos' class="custom-link">Alunos</router-link>
      </v-btn>

      <v-btn>
        <router-link to='/orientadores' class="custom-link">Orientadores</router-link>
      </v-btn>

      <v-btn>
        <router-link to='/empresas' class="custom-link">Empresas</router-link>
      </v-btn>

      <v-btn>
        <router-link to='/estagios' class="custom-link">Estágios</router-link>
      </v-btn>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>
  
  
  <router-link to='/alunos'>Alunos</router-link>
  <router-link to='/orientadores'>Orientadores</router-link>
  <router-link to='/empresas'>Empresas</router-link>
  <div>
    <router-view></router-view>
  </div> 

</v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
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

.custom-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s;
}

.custom-link:hover {
  background-color: #1976d2;
  color: white;
}
</style>
