import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface ForecastWeatherData {
  forecast: {
    forecastday: [
      {
        hour: [
          {
            chance_of_rain:number
          },{},{},
        ]
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      },
      {
        day: {
          avgtemp_c: number
          condition: {
            icon: string
          }
        }
      }
    ]
  }
}

const apiForecastUrl = ref('https://api.weatherapi.com/v1/forecast.json')
const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

export const useForecastWeatherDataStore = defineStore('forecast-weather-data', () => {
  const forecastWeatherData = ref<ForecastWeatherData | null>(null)

  const secondDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[1]?.day?.avgtemp_c || undefined
  })

  const thirdDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[2]?.day?.avgtemp_c || undefined
  })

  const fourthDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[3]?.day?.avgtemp_c || undefined
  })

  const fifthDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[4]?.day?.avgtemp_c || undefined
  })

  const sixthDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[5]?.day?.avgtemp_c || undefined
  })

  const seventhDayTemperature = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[6]?.day?.avgtemp_c || undefined
  })

  const secondDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[1]?.day?.condition?.icon || ''
  })

  const thirdDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[2]?.day?.condition?.icon || ''
  })

  const fourthDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[3]?.day?.condition?.icon || ''
  })

  const fifthDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[4]?.day?.condition?.icon || ''
  })

  const sixthDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[5]?.day?.condition?.icon || ''
  })

  const seventhDayForecastWeatherConditionIcon = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[6]?.day?.condition?.icon || ''
  })

  const midnightChanceOfRain = computed(() => {
    return forecastWeatherData.value?.forecast?.forecastday[0]?.hour?.[0]?.chance_of_rain|| undefined
  })

  const fetchForecastWeatherData = async (
    inputedLocation: string
  ): Promise<ForecastWeatherData | null> => {
    try {
      const response = await axios.get(
        `${apiForecastUrl.value}?key=${apiKey.value}&q=${inputedLocation}&days=7`
      )
      const data: ForecastWeatherData = response.data
      forecastWeatherData.value = data
      console.log(data)

      return data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      return null
    }
  }

  return {
    forecastWeatherData: computed(() => forecastWeatherData.value),
    fetchForecastWeatherData,
    secondDayTemperature,
    thirdDayTemperature,
    fourthDayTemperature,
    fifthDayTemperature,
    sixthDayTemperature,
    seventhDayTemperature,
    secondDayForecastWeatherConditionIcon,
    thirdDayForecastWeatherConditionIcon,
    fourthDayForecastWeatherConditionIcon,
    fifthDayForecastWeatherConditionIcon,
    sixthDayForecastWeatherConditionIcon,
    seventhDayForecastWeatherConditionIcon,
    midnightChanceOfRain
  }
})
