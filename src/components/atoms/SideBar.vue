<template>
  <v-app>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-title @click="setResource('sport')">home</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="setResource('sport')">sport</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="setResource('business')">business</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="setResource('technology')">tech</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="setResource('finance')">finance</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="setResource('entertainment')">entertainment</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-app>
</template>

<script>
import constants from '../../common/constants.js'

export default {
  name: 'sideBar',
  data () {
    return {
      //menuItems: this.$store.state.news.newsData,
      select: false,
      constants: constants.menuItems
    }
  },
  props: {
    setResource: Function
  }
}
</script>

<style lang='sass'>

</style>