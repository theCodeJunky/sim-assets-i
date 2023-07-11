<template>
  <main class="container">
    <h1>SIMULATE FMINTING</h1>
    <p>Estimate the potential value of FLR based on the total number of assets minted onto the Flare Network.</p>
    <div class="minted-list">
      <MintSection  v-for="coin in coinStore.coins" :key="coin.id" :coin="coin" />
    </div>
  </main>
</template>
<script setup>
  import { useCoinStore } from '../stores/CoinStore.js'
  import MintSection from '../components/MintSection.vue'

  const coinStore = useCoinStore()
</script>
<style scoped>
  ul {
    list-style: none;
  }

  .minted-list {
    background-color: white;
    width: 100%;
  }
</style>