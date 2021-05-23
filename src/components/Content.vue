<template>
  <div>
    <div v-for="n in 8" :key="n">
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
