<template>
  <v-layout class="rounded rounded-md">
    <Drawer />
    <v-app-bar title="TO-DO APP"></v-app-bar>
    <v-main class="" style="min-height: 300px">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import Drawer from "./components/Drawer.vue";
export default {
  components: { Drawer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
