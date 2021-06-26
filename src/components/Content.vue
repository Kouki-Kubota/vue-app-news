<template>
  <div class="itemField">
    <div>
      <Item />
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