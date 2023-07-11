<template>
    <h2>{{coin.name}}</h2>
    <p>{{coin.price}}</p>
    <p>{{coin.mintQuantity}}</p>
    <p>value</p>
</template>
<script setup>

 const props = defineProps(['coin'])
 const coin = props.coin

</script>