<template>
<div>
  <div class="itemField">
    <div class="header">
      <Header />
    </div>
    <div class="contentField">
      <Content />
    </div>
  </div>
</div>
</template>
 
<script>
import Header from './components/Header'
import Content from './components/Content'

export default {
  components: { 
    Header,
    Content,
  }
}
</script>
<style lang="sass" scoped>
  .contentField 
    width: 100vw
    background-image: url("~@/assets/imgs/bgAulora.png")
    background-repeat: no-repeat
    background-attachment: fixed

</style>