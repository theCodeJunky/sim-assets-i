<template>
  <nav class="links">
    <RouterLink active-class="active" to="/">Simulate</RouterLink>
    <RouterLink active-class="active" to="/mint">Mint</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
  .links {
    padding: 1em;
  }

  .links a {
    margin: 0 5px;
  }

  .active {
    font-weight: bold;
    color: green;
  }
</style>
