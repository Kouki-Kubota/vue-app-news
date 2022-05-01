<template>
  <v-app>
    <!-- ここにヘッダーをコーディング -->
    <header>
      <v-app-bar
        app
        dark
      >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue-News</v-toolbar-title>
          <div class="textField">
            <v-text-field
              hide-details
              append-icon="mdi-magnify"
              single-line
            ></v-text-field>
          </div>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
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
              <v-list-item-title @click="setResource('science')">science</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('entertainment')">entertainment</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>
 
<script>
//import SideBar from './atoms/SideBar.vue'

export default {
  data () {
    return {
      drawer: false
    }
  },
  props: {
    setResource: Function
  }
}
</script>
 
<style lang="sass">
.textField
  margin-left: 40px
  width: 300px

</style>