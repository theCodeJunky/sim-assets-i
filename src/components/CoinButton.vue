<template>
  <button>
    <p>{{coin.ticker}} &gt; F{{coin.ticker}}</p>
  </button>
</template>
<script setup>

  const props = defineProps(['coin'])
  const coin = props.coin

</script>