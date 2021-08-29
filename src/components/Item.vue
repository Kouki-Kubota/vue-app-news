<template>
  <div class="itemField">
    <div v-for="(result, index ) in results" :key="index">
      <ul>
        <li>
          <a :href="`${result.url}`">
            <v-card
              class="mx-auto card"
              max-width="400"
              height="400"
              :src="result.url"
              color="rgb(255, 0, 0, 0)"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="result.urlToImage"
              >

              </v-img>
              <v-card-title>{{ result.title }}</v-card-title>

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
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const key = '540c0a2d08264331b2101b7c7169ed92'
export default {
  data () {
    return {
      results:[]
    }
  },
  /* mounted(){
    //var i = 0;
      axios.get('https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey='+ key)
      .then(response => {
        Object.keys(response).forEach(key => {
          this.results = response.data.[key];
        })
      })
      console.log(this.results)
  } */
  mounted(){
    //var i = 0;
      axios.get('https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey='+ key)
      .then(response => {
        this.results = response.data.articles;
      })
      console.log(this.results);
  }
}
</script>

<style lang="sass">
.card 
  margin: 80px 30px 30px 30px

.itemField
  display: flex
  max-width: 100vw

ul
  list-style: none

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
  background-color: rgba(255, 255, 255, 0.1) /* 背景色 */
  border: 1px solid rgba(255, 255, 255, 0.4) /* ボーダー */
  border-right-color: rgba(255, 255, 255, 0.2)
  border-bottom-color: rgba(255, 255, 255, 0.2)
  border-radius: 15px
  -webkit-backdrop-filter: blur(20px) /* ぼかしエフェクト */
  backdrop-filter: blur(20px)
  box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5) /* 薄い影 */

</style>