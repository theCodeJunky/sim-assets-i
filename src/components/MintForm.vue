<template>
  <h2>Mint Quantity</h2>
  <form @submit.prevent="handleSumbit">
      <input 
        type="text"
        placeholder="0.00"
        v-model="mintCoin"
      >
  </form>

  <button>0.01%</button>
  <button>0.10%</button>
  <button>1.00%</button>
  <button>Max</button>
</template>

<script setup>
  import { ref } from 'vue'
  import { useCoinStore } from "../stores/CoinStore.js"

  const props = defineProps(['coin'])
  const coin = props.coin

  const coinStore = useCoinStore()
  const mintCoin = ref(0)

  const handleSubmit = () => {

    if(parseInt(mintCoin.value) > 0) {
       coinStore.updateMintAmount(coin.id, mintCoin.value)
    }
  }

</script>