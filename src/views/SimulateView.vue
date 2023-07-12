<template>
    <ChartCollateral />
    <MintedAssets :minted="coinStore.minted" />
</template>
<script setup>
  import { useCoinStore } from '../stores/CoinStore.js'
  import ChartCollateral from '../components/ChartCollateral.vue'
  import MintedAssets from '../components/MintedAssets.vue'
  

   const coinStore = useCoinStore()

</script>
<style scoped>
  h1{
    padding: 15px 0;
  }


</style>