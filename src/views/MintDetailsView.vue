<template>
  <h1>MINT DETAILS</h1>
  {{id}}
</template>
<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const {id} = route.params

</script>