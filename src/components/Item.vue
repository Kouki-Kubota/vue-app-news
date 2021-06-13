<template>
    <v-card
      class="mx-auto card"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="articles.urlToImage"
      >
      </v-img>
      <v-card-title>{{ articles.title }}</v-card-title>

      <v-card-subtitle class="pb-0">
        {{ articles.url }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ articles.description }}</div>
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
</template>
<script>
import axios from 'axios'
const key = '540c0a2d08264331b2101b7c7169ed92'
export default {
  data () {
    return {
      articles:[]
    }
  },
  mounted(){
      axios.get('https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey='+ key)
      .then(response => {this.articles = response.data.articles[0]})
      console.log(this.articles)
  }
}
</script>

<style>
.card {
  margin: 80px 30px 30px 30px;
}
</style>