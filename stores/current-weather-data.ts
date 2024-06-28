import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface CurrentWeatherData {
  current: {
    cloud: number
    wind_kph: number
    wind_dir: string
    uv: number
    vis_km: number
    humidity: number
    condition: {
      icon: string
    }
    feelslike_c: number
    pressure_mb: number
  }
  location: {
    tz_id: string
    name: string
    country: string
  }
}

const apiCurrentUrl = ref('https://api.weatherapi.com/v1/current.json')
const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

export const useCurrentWeatherDataStore = defineStore('current-weather-data', () => {
  const currentWeatherData = ref<CurrentWeatherData | null>(null)

  const currentWeatherDataState = ref('Awaiting')

  const currentCloud = computed(() => {
    return currentWeatherData.value?.current?.cloud || 0
  })

  const windStatus = computed(() => {
    return currentWeatherData.value?.current?.wind_kph || 0
  })

  const humidity = computed(() => {
    return currentWeatherData.value?.current?.humidity || 0
  })

  const visibility = computed(() => {
    return currentWeatherData.value?.current?.vis_km || 0
  })

  const uvIndex = computed(() => {
    return currentWeatherData.value?.current?.uv || 0
  })

  const windDirection = computed(() => {
    return currentWeatherData.value?.current?.wind_dir || ''
  })

  const currentWeatherConditionIcon = computed(() => {
    return currentWeatherData.value?.current?.condition?.icon || ''
  })

  const location = computed(() => {
    return (
      `${currentWeatherData.value?.location?.name},${currentWeatherData.value?.location?.country}` ||
      ''
    )
  })

  const realFeel = computed(() => {
    return currentWeatherData.value?.current?.feelslike_c || 0
  })

  const pressure = computed(() => {
    return currentWeatherData.value?.current?.pressure_mb || 0
  })

  const fetchCurrentWeatherData = async (
    inputedLocation: string
  ): Promise<CurrentWeatherData | null> => {
    currentWeatherDataState.value = 'Awaiting'
    try {
      const response = await axios.get(
        `${apiCurrentUrl.value}?key=${apiKey.value}&q=${inputedLocation}`
      )
      const data: CurrentWeatherData = response.data
      currentWeatherData.value = data
      currentWeatherDataState.value = 'Success'
      return data
    } catch (error) {
      currentWeatherDataState.value = 'Error'
      return null
    }
  }

  return {
    currentWeatherData: computed(() => currentWeatherData.value),
    fetchCurrentWeatherData,
    currentCloud,
    currentWeatherConditionIcon,
    location,
    realFeel,
    pressure,
    currentWeatherDataState,
    windStatus,
    windDirection,
    visibility,
    humidity,
    uvIndex
  }
})
