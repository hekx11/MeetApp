<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import { computed } from 'vue'

const route = useRoute();
console.log(route.path)
function routeIsLogin() {
  return route.path === '/login'
}
</script> 

<template>
  <TheNavbar v-if="!routeIsLogin()" />
  <RouterView />
</template>

<style scoped>

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
