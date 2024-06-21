import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

interface CurrentWeatherData {
  current: {
    cloud: string
  }
  location: {
    localtime: string
  }
}

export const useCurrentWeatherDataStore = defineStore('weather-data', () => {
  const apiCurrentUrl = ref('https://api.weatherapi.com/v1/current.json')
  const apiForecastUrl = ref('http://api.weatherapi.com/v1/forecast.json')
  const currentWeatherData = ref<CurrentWeatherData | null>(null)
  const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

  const localtime = computed(() => {
    return currentWeatherData.value?.location?.localtime.slice(10) || ''
  })
  const cloud = computed(() => {
    return currentWeatherData.value?.current?.cloud || ''
  })

  const fetchCurrentWeatherData = async (): Promise<CurrentWeatherData | null> => {
    try {
      const response = await axios.get(`${apiCurrentUrl.value}?key=${apiKey.value}&q=canada`)
      const data: CurrentWeatherData = response.data
      currentWeatherData.value = data
      console.log(data)

      return data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      return null
    }
  }

  return {
    currentWeatherData: computed(() => currentWeatherData.value),
    fetchCurrentWeatherData,
    localtime,
    cloud
  }
})
