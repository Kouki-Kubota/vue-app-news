<template>
<div>
  <div class="itemField">
    <div class="header">
      <Header />
    </div>
    <div class="contentField">
      <Weather />
      <Content />
    </div>
  </div>
</div>
</template>
 
<script>
import Header from './components/Header'
import Content from './components/Content'
import Weather from './components/Weather'

export default {
  components: { 
    Header,
    Content,
    Weather
  }
}
</script>
<style lang="sass" scoped>
  .contentField 
    width: 100vw
    background-image: url("~@/assets/imgs/bgAulora.png")
    background-repeat: repeat

</style>