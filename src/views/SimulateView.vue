<template>
  <main class="container">
    <h1>SIMULATE</h1>
    <p>Chart Goes Here!</p>
    <div class="coin-tile-list">
      <div>Mint Count: {{coinStore.mintCount}}</div>
      <MintTile v-for="coin in coinStore.minted" :key="coin.id" :coin="coin" />
    </div>

  
  </main>
</template>
<script setup>
  import { useCoinStore } from '../stores/CoinStore.js'
  import MintTile from '../components/MintTile.vue'

   const coinStore = useCoinStore()

</script>
<style scoped>
  
</style>