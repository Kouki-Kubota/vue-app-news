<template>
  <div class="itemField">
    <div v-for="(result, index ) in results" :key="index">
      <ul>
        <li>
          <v-card
            class="mx-auto card"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="result.urlToImage"
            >

            </v-img>
            <v-card-title>{{ result.title }}</v-card-title>
            <v-card-subtitle class="pb-0">
              {{ result.url }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ result.description }}</div>
            </v-card-text>

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

<style>
.card {
  margin: 80px 30px 30px 30px;
}
.itemField {
  display: flex;
  max-width: 80vw;
}
</style>