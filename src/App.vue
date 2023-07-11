<template>
  <header>
    <LogoSimAssets />
    <AccordionArrow />
    <Algo />
    <Btc />
    <Doge />
    <Edit />
    <FlareLogo />
    <Info />
    <Ltc />
    <NavMintActive />
    <NavMint />
    <NavSimulateActive />
    <NavSimulate />
    <Xrp />
  </header>
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
  import LogoSimAssets from './components/icons/LogoSimAssets.vue'
  import AccordionArrow from './components/icons/AccordionArrow.vue'
  import Algo from './components/icons/Algo.vue'
  import Btc from './components/icons/Btc.vue'
  import Doge from './components/icons/Doge.vue'
  import Edit from './components/icons/Edit.vue'
  import FlareLogo from './components/icons/FlareLogo.vue'
  import Info from './components/icons/Info.vue'
  import Ltc from './components/icons/Ltc.vue'
  import NavMintActive from './components/icons/NavMintActive.vue'
  import NavMint from './components/icons/NavMint.vue'
  import NavSimulateActive from './components/icons/NavSimulateActive.vue'
  import NavSimulate from './components/icons/NavSimulate.vue'
  import Xrp from './components/icons/Xrp.vue'

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
