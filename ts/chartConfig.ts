import { Chart } from 'chart.js'
import { useForecastWeatherDataStore } from '../stores/forecast-weather-data'
import { computed } from 'vue'

// const chanceOfRainData = computed(() => {
//   return [useForecastWeatherDataStore().midnightChanceOfRain]
// })

export const data = {
  labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
  datasets: [
    {
      label: 'Chance Of Rain (%)',
      backgroundColor: '#BAD4EB',
      borderRadius: 40,
      data: [10, 20, 12, 39, 10, 100]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  barThickness: 15
}

Chart.defaults.font.size = 12
Chart.defaults.font.weight = 400
Chart.defaults.color = '#FFFFFF'
Chart.defaults.borderColor = ''
