<template>
  <v-card v-if="weather">
    <div>{{ weather.name }} Weather</div>
    <div>{{ weather.weather[0].description }}</div>
    <div>{{ Math.round(weather.main.temp) }}°C</div>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const weather = ref(null)

const API_KEY = '6da0a3e21985f29c019b9529a1339726'
const CITY = 'London'

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`,
    )
    weather.value = response.data
  } catch (error) {
    console.error('Weather fetch failed:', error)
  }
})
</script>
