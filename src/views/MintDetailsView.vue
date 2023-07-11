<template>
  <p>Route Param: {{id}}</p>
  <MintSection v-for="coin in coinStore" :key=coin />
</template>
<script setup>
  import { useRoute } from 'vue-router'
  import { useCoinStore } from '../stores/CoinStore.js'
  import MintSection from '../components/MintSection'
  
  const route = useRoute()
  const {id} = route.params

  const coinStore = useCoinStore()
  const coin = coinStore.coins.find(c => c.id == id)

</script>