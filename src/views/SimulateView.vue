<template>
  <main class="container">
    <h1>SIMULATE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed aperiam nobis quasi dolore deserunt, est ex voluptatum molestiae, fugit consequatur. Saepe ad impedit adipisci in blanditiis facilis mollitia odio?</p>
    <div class="coin-tile-list">
      <CoinTile v-for="coin in coinStore.coins" :key="coin.id" :coin="coin" />
    </div>
  
  </main>
</template>
<script setup>
  import { useCoinStore } from '../stores/CoinStore.js'
  import CoinTile from '../components/CoinTile.vue'

   const coinStore = useCoinStore()

</script>
<style scoped>
  
</style>