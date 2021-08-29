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

<style lang="sass" scoped>
.itemField
  display: flex
  width: 100vw
  margin: 0 auto
  flex-wrap: wrap
</style>