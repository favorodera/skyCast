<script setup lang="ts">
import { useDaysOfTheWeekStore } from '../../stores/days-of-the-week'
import { useForecastWeatherDataStore } from '../../stores/forecast-weather-data'
import BriefDailyOverview from './BriefDailyOverview.vue'
import BriefWeeklyOverview from './BriefWeeklyOverview.vue'
const forecastWeatherData = useForecastWeatherDataStore()
const daysOfTheWeek = useDaysOfTheWeekStore()

import { onBeforeUpdate, ref } from 'vue'
import { Bar } from 'vue-chartjs'

import {
  BarElement,
  CategoryScale,
  Chart,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = ref({
  labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
  datasets: [
    {
      label: 'Chance Of Rain (%)',
      backgroundColor: '#BAD4EB',
      borderRadius: 40,
      data: []
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  barThickness: 15
})

Chart.defaults.font.size = 12
Chart.defaults.font.weight = 400
Chart.defaults.color = '#FFFFFF'
Chart.defaults.borderColor = ''

onBeforeUpdate(() => {
  data.value.datasets[0].data = forecastWeatherData.chanceOfRainData as []
})
</script>

<template>
  <section>
    <BriefDailyOverview />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 1) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.secondDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.secondDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 2) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.thirdDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.thirdDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 3) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fourthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.fourthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 4) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fifthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.fifthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 5) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.sixthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.sixthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 6) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.seventhDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.seventhDayForecastWeatherConditionIcon"
    />
    <div class="chance-of-rain-container">
      <Bar
        v-if="
          forecastWeatherData.chanceOfRainData[0] != undefined ||
          forecastWeatherData.chanceOfRainData[1] != undefined ||
          forecastWeatherData.chanceOfRainData[2] != undefined ||
          forecastWeatherData.chanceOfRainData[3] != undefined ||
          forecastWeatherData.chanceOfRainData[4] != undefined ||
          forecastWeatherData.chanceOfRainData[5] != undefined
        "
        :data="data"
        :options="options"
      />
      <Bar v-else="" :data="data" :options="options" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  gap: 2.44rem;
}
.chance-of-rain-container {
  max-width: 18.5625rem;
  height: 14.125rem;
  flex: 0 0 18.5625rem;
}
</style>
