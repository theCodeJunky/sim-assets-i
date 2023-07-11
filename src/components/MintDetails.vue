<template>
  <h1>MINT DETAILS</h1>
  <p>{{ coin.ticker }} Price</p>
  <p>${{ coin.price }}</p>

  <p>{{ coin.ticker }} Circulating Supply</p>
  <p>{{ coin.circulatingSupply}}</p>
  <p>Required Collateral $50,000,000</p>
</template>

<script setup>

  const props = defineProps(['coin'])
  const coin = props.coin

</script>