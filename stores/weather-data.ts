import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface CurrentWeatherData {
  current: {
    cloud: string
    condition: {
      icon: string
    }
  }
  location: {
    localtime: string
    name: string
    country: string
  }
}

const apiCurrentUrl = ref('https://api.weatherapi.com/v1/current.json')
const apiForecastUrl = ref('http://api.weatherapi.com/v1/forecast.json')
const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

export const useCurrentWeatherDataStore = defineStore('current-weather-data', () => {
  const currentWeatherData = ref<CurrentWeatherData | null>(null)

  const localtime = computed(() => {
    return (
      `${Number(currentWeatherData.value?.location?.localtime.slice(11, 13)) - 12 === 0 ? '0' : ''}${Number(currentWeatherData.value?.location?.localtime.slice(11, 13)) - 12}${currentWeatherData.value?.location?.localtime.slice(13)}` ||
      ''
    )
  })
  const cloud = computed(() => {
    return currentWeatherData.value?.current?.cloud || ''
  })

  const weatherConditionIcon = computed(() => {
    return currentWeatherData.value?.current?.condition?.icon || ''
  })

  const location = computed(() => {
    return (
      `${currentWeatherData.value?.location?.name},${currentWeatherData.value?.location?.country}` ||
      ''
    )
  })

  const meridian = computed(() => {
    return Number(currentWeatherData.value?.location?.localtime.slice(11, 13)) > 11 ? 'PM' : 'AM'
  })

  const fetchCurrentWeatherData = async (
    inputedLocation: string
  ): Promise<CurrentWeatherData | null> => {
    try {
      const response = await axios.get(
        `${apiCurrentUrl.value}?key=${apiKey.value}&q=${inputedLocation}`
      )
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
    cloud,
    meridian,
    weatherConditionIcon,
    location
  }
})
