<template>
  <nav class="links">
    <RouterLink active-class="active" to="/">
      <NavSimulateActive v-if="routes.path == '/'" class="icon" />
      <NavSimulate v-else />
      <span>Simulate</span>
    </RouterLink>
    <RouterLink active-class="active" to="/mint">
      <NavMintActive v-if="routes.path == '/mint'" />
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

  console.log(routes.path)

</script>
<style lang="scss" scoped>
  a {

  }

  svg {
    min-height: 33px;
  }

  .active {
    font-weight: bold;
  }
</style>