<template>
    <div class="minted-assets">
      <!-- <div>Mint Count: {{coinStore.mintCount}}</div> -->
      <h1>FMINTED ASSETS</h1>
      <RouterLink to="/mint"> 
        <Edit class="edit-btn" />
      </RouterLink>
      
      <MintTile v-for="coin in minted" :key="coin.id" :coin="coin" />

    </div>
</template>
<script setup>
  import { RouterView, RouterLink, useRoute } from 'vue-router'
  import MintTile from '../components/MintTile.vue'
  import Edit from './icons/Edit.vue'


  const props = defineProps(["minted"])
  const minted = props.minted


</script>
<style lang="scss" scoped>

  .minted-assets {
    position: relative;

    h1 {
      padding: 15px 0;
    }

    .edit-btn {
      position: absolute;
      top: 7px;
      right: 7px;
    }

  }


</style>