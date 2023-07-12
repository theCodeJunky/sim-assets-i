<template>
  <nav class="links">
    <RouterLink active-class="active" to="/">
      <NavSimulateActive v-if="routes.path == '/'" class="icon" />
      <NavSimulate v-else />
      <span>Simulate</span>
    </RouterLink>
    <RouterLink active-class="active" to="/mint">
      <NavMintActive v-if="routes.path.includes('mint')" />
      <NavMint v-else />
      <span>Mint</span>
    </RouterLink>
  </nav>
</template>
<script setup>
  import { RouterView, RouterLink, useRoute } from 'vue-router'
  import NavMintActive from './icons/NavMintActive.vue'
  import NavMint from './icons/NavMint.vue'
  import NavSimulateActive from './icons/NavSimulateActive.vue'
  import NavSimulate from './icons/NavSimulate.vue'

  const routes = useRoute()
  const route = routes.path.includes('mint')

  console.log(routes.path)
  console.log(route)

</script>
<style lang="scss" scoped>
  .active {
    font-weight: bold;
  }
</style>