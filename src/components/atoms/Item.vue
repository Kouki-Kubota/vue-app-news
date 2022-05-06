<template>
  <div class="itemField">
    <a :href="`${article.url}`">
      <v-card
        class="mx-auto card"
        max-width="400"
        height="400"
        :src="article.url"
        color="rgb(255, 0, 0, 0)"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="article.urlToImage"
        >

        </v-img>
        <v-card-title>{{ article.title }}</v-card-title>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>

          <v-btn
            color="orange"
            text
          >
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: {
    article: Object
  },
}
</script>

<style lang="sass">
.card 
  margin: 80px 30px 30px 30px

.itemField
  display: flex

a
  text-decoration: none
  color: #000000
  &:link, &:visited, &:hover, &:active
    color: #000000

.transparent
  background-color: blue!important

.v-card
  width: 100%
  max-width: 600px
  background-color: none
  background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)
  border: 1px solid rgba(255, 255, 255, 0.4) /* ボーダー */
  border-right-color: rgba(255, 255, 255, 0.2)
  border-bottom-color: rgba(255, 255, 255, 0.2)
  border-radius: 15px
  -webkit-backdrop-filter: blur(20px) /* ぼかしエフェクト */
  backdrop-filter: blur(20px)
  box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5) /* 薄い影 */

</style>