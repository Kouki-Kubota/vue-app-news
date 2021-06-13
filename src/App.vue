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
   max-width: 80vw;
 }

</style>