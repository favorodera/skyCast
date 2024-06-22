import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface AstronomyData {
  astronomy: {
    astro: {
      sunrise: string
      sunset: string
    }
  }
}

const apiAstronomyUrl = ref('https://api.weatherapi.com/v1/astronomy.json')
const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

export const useAstronomyDataStore = defineStore('astronomy-data', () => {
  const astronomyData = ref<AstronomyData | null>(null)

  const sunrise = computed(() => {
    return astronomyData.value?.astronomy?.astro?.sunrise || ''
  })

  const sunset = computed(() => {
    return astronomyData.value?.astronomy?.astro?.sunset || ''
  })

  const fetchAstronomyData = async (inputedLocation: string): Promise<AstronomyData | null> => {
    try {
      const response = await axios.get(
        `${apiAstronomyUrl.value}?key=${apiKey.value}&q=${inputedLocation}`
      )
      const data: AstronomyData = response.data
      astronomyData.value = data
      console.log(data)
      return data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      return null
    }
  }

  return {
    astronomyData: computed(() => astronomyData.value),
    fetchAstronomyData,
    sunrise,
    sunset
  }
})
