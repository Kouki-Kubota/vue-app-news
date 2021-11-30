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
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
            >
              <v-list-item-title @click="changeCategory(menuItem)">{{ menuItem }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>
 
<script>
//import constants from '../common/constants'
//import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      drawer: false,
      /* menuItems: constants.menuItems,
      activeCategory: constants.menuItems.active */
      menuItems: this.$store.state.news.newsData
    }
  },
  methods: {
    changeCategory(category) {
      this.$store.commit('news/changeCategory', {
        categoryName: category
      })
    }
  }
}
</script>
 
<style lang="sass">
.textField
  margin-left: 40px
  width: 300px

</style>