<template>
  <nav class="links">
    <RouterLink active-class="active" to="/">Simulate</RouterLink>
    <RouterLink active-class="active" to="/mint">Mint</RouterLink>
  </nav>
  <main>
    <div v-if="isLoading">LOADING...</div>
    <RouterView />
   
    <button @click="coinStore.$reset">Reset State</button>
    <button @click="coinStore.getCoins">Grab Coins</button>
  </main>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import { RouterView, RouterLink } from 'vue-router'
  import { useCoinStore } from './stores/CoinStore.js'

  const coinStore = useCoinStore()

  const { coins, isLoading, minted, mintCount, totalCoins  } = storeToRefs(coinStore)

  coinStore.getCoins()


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
