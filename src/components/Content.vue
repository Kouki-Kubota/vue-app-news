<template>
  <div class="itemField">
    <div v-for="n in 3" :key="n">
      <Item :article="n"/>
    </div>
  </div>
</template>

<script>
import  Item  from "./Item.vue"

export default {
  components: {
    Item
  },
}

</script> 

<style>
.itemField {
  display: flex;
  max-width: 80vw;
}
</style>