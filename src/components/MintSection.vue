<template>
  <button>
    <p>{{coin.ticker}} &gt; F{{coin.ticker}}</p>
  </button>
  <div>
    <MintDetails :coin="coin" />
    <MintForm :coin="coin" />
  </div>
  <br />
  <br />
</template>
<script setup>
  import MintDetails from './MintDetails.vue'
  import MintForm from './MintForm.vue'

  const props = defineProps(['coin'])
  const coin = props.coin

</script>

<style scoped>
  button {
    width: 50%;
  }
</style>