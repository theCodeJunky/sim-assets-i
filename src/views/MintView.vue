<template>
  <main class="container">
    <h1>SIMULATE FMINTING</h1>
    <p>Estimate the potential value of FLR based on the total number of assets minted onto the Flare Network.</p>
    <!-- <ul>
      <li v-for="coin in coinStore.coins" :key="coin.id">
        {{coin.name}}
      </li>
    </ul> -->
    <div class="coin-list">
      <CoinButton  v-for="coin in coinStore.coins" :key="coin.id" :coin="coin" />
    </div>
  </main>
</template>
<script setup>
  import { useCoinStore } from '../stores/CoinStore.js'
  import CoinButton from '../components/CoinButton.vue'

  const coinStore = useCoinStore()
</script>
<style scoped>
  ul {
    list-style: none;
  }
</style>