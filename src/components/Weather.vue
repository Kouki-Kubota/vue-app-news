<template>
  <div class="weather">
    {{ results[0].description }}
    <div id="icon">
      <img
        id="wicon"
        :src="`${iconUrl}${results[0].icon}.png`"
        alt="weather icon"
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//open weatherのAPIkey
const key = '91d43fe9fc047a60807d14bbc8f2e798'

export default {
  data () {
    return {
      results: [],
      iconUrl: "http://openweathermap.org/img/w/"
    }
  },
  mounted() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&lang=ja&APPID=' + key)
    .then(response => {
      this.results = response.data.weather;
    })
  }
}
</script>

<style lang="sass" scoped>
.weather
  height: 200px
  margin-top: 100px

#wicon
  opacity: .7
</style>
