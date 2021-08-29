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
    Content
  }
}
</script>
<style>
 .contentField {
   max-width: 100vw;
   background: linear-gradient(90deg, rgba(57, 203, 71, 0.42) 6.74%, rgba(60, 57, 205, 0.44) 50.28%, rgba(215, 63, 63, 0.41) 92.79%);
 }

</style>