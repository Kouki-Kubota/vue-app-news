<template>
  <div class="itemField">
    <div>
      <WeatherItem />
      <Item />
    </div>
  </div>
</template>

<script>
import  Item  from "./atoms/Item"
import  WeatherItem from "./atoms/WeatherItem"

export default {
  components: {
    Item,
    WeatherItem
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