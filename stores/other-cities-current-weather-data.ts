import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Istanbul {
  current: {
    condition: {
      icon: string
      text: string
    }
  }
  location: {
    name: string
    country: string
  }
}

interface London {
  current: {
    condition: {
      icon: string
      text: string
    }
  }
  location: {
    name: string
    country: string
  }
}

interface Paris {
  current: {
    condition: {
      icon: string
      text: string
    }
  }
  location: {
    name: string
    country: string
  }
}

interface NYC {
  current: {
    condition: {
      icon: string
      text: string
    }
  }
  location: {
    name: string
    country: string
  }
}

const apiCurrentUrl = ref('https://api.weatherapi.com/v1/current.json')
const apiKey = ref(import.meta.env.VITE_WEATHER_API_KEY)

export const useOtherCitiesCurrentWeatherDataStore = defineStore(
  'other-cities-current-weather-data-store',
  () => {
    const otherCitiesCurrentWeatherDataState = ref('Awaiting')

    const istanbulWeatherData = ref<Istanbul | null>(null)
    const londonWeatherData = ref<London | null>(null)
    const parisWeatherData = ref<Paris | null>(null)
    const newYorkCityWeatherData = ref<NYC | null>(null)

    const country = computed(() => {
      return [
        istanbulWeatherData.value?.location.country,
        londonWeatherData.value?.location.country,
        parisWeatherData.value?.location.country,
        newYorkCityWeatherData.value?.location.country
      ]
    })

    const city = computed(() => {
      return [
        istanbulWeatherData.value?.location.name,
        londonWeatherData.value?.location.name,
        parisWeatherData.value?.location.name,
        newYorkCityWeatherData.value?.location.name
      ]
    })

    const weatherConditionIcon = computed(() => {
      return [
        istanbulWeatherData.value?.current?.condition?.icon,
        londonWeatherData.value?.current?.condition?.icon,
        parisWeatherData.value?.current?.condition?.icon,
        newYorkCityWeatherData.value?.current?.condition?.icon
      ]
    })

    const weatherCondition = computed(() => {
      return [
        istanbulWeatherData.value?.current?.condition?.text,
        londonWeatherData.value?.current?.condition?.text,
        parisWeatherData.value?.current?.condition?.text,
        newYorkCityWeatherData.value?.current?.condition?.text
      ]
    })

    const fetchOtherCitiesWeatherData = async (): Promise<
      (Istanbul | null) & (null | London) & (null | Paris) & (null | NYC)
    > => {
      const requests = [
        axios.get(`${apiCurrentUrl.value}?key=${apiKey.value}&q=istanbul`),
        axios.get(`${apiCurrentUrl.value}?key=${apiKey.value}&q=london`),
        axios.get(`${apiCurrentUrl.value}?key=${apiKey.value}&q=paris`),
        axios.get(`${apiCurrentUrl.value}?key=${apiKey.value}&q=New York`)
      ]

      otherCitiesCurrentWeatherDataState.value = 'Awaiting'

      try {
        const responses = await Promise.all(requests)
        const istanbulData: Istanbul = responses[0].data
        const londonData: London = responses[1].data
        const parisData: Paris = responses[2].data
        const newYorkData: NYC = responses[3].data

        istanbulWeatherData.value = istanbulData
        londonWeatherData.value = londonData
        parisWeatherData.value = parisData
        newYorkCityWeatherData.value = newYorkData
        otherCitiesCurrentWeatherDataState.value = 'Success'

        return istanbulData && londonData && parisData && newYorkData
      } catch (error) {
        otherCitiesCurrentWeatherDataState.value = 'Error'
        return null
      }
    }

    return {
      istanbulWeatherData: computed(() => istanbulWeatherData.value),
      londonWeatherData: computed(() => londonWeatherData.value),
      parisWeatherData: computed(() => parisWeatherData.value),
      newYorkCityWeatherData: computed(() => newYorkCityWeatherData.value),
      fetchOtherCitiesWeatherData,
      country,
      city,
      weatherCondition,
      weatherConditionIcon,
      otherCitiesCurrentWeatherDataState
    }
  }
)
