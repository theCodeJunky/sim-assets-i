<template>
    <header>
      <LogoSimAssets />
      <!-- <AccordionArrow />
      <Algo />
      <Btc />
      <Doge />
      <Edit />
      <FlareLogo />
      <Info />
      <Ltc />
      <Xrp /> -->
    </header>
  <main>
    <div v-if="isLoading">LOADING...</div>
    <RouterView />
   
    <button @click="coinStore.$reset">Reset State</button>
    <button @click="coinStore.getCoins">Grab Coins</button>

  </main>
  <Navigation />
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import { RouterView } from 'vue-router'
  import { useCoinStore } from './stores/CoinStore.js'
  import LogoSimAssets from './components/icons/LogoSimAssets.vue'
  import Navigation from './components/Navigation.vue'

  // import AccordionArrow from './components/icons/AccordionArrow.vue'
  // import Algo from './components/icons/Algo.vue'
  // import Btc from './components/icons/Btc.vue'
  // import Doge from './components/icons/Doge.vue'
  // import Edit from './components/icons/Edit.vue'
  // import FlareLogo from './components/icons/FlareLogo.vue'
  // import Info from './components/icons/Info.vue'
  // import Ltc from './components/icons/Ltc.vue'
  // import Xrp from './components/icons/Xrp.vue'

  const coinStore = useCoinStore()

  const { coins, isLoading, minted, mintCount, totalCoins  } = storeToRefs(coinStore)

  coinStore.getCoins()


</script>

<style lang="scss">
   @import './assets/scss/style.scss';


</style>
