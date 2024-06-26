import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Time {
  datetime: string
}

const apiTimeUrl = ref('https://worldtimeapi.org/api/timezone')

export const useTimeStore = defineStore('time', () => {
  const time = ref<Time | null>(null)

  const timeDataState = ref('Awaiting')

  const rawTime = computed(() => {
    return time.value?.datetime?.slice(11, 16)
  })

  const processedTime = computed(() => {
    return (
      `${
        Number(rawTime.value?.slice(0, 2)) > 12
          ? Number(rawTime.value?.slice(0, 2)) - 12
          : rawTime.value?.slice(0, 2) || ''
      }${rawTime.value?.slice(2, 5) || ''}
    ` || ''
    )
  })

  const meridian = computed(() => {
    return Number(rawTime.value?.slice(0, 2)) >= 12
      ? 'PM'
      : Number(rawTime.value?.slice(0, 2)) < 12
        ? 'AM'
        : ''
  })

  const fetchTime = async (TimeZone: string): Promise<Time | null> => {
    timeDataState.value = 'Awaiting'
    try {
      const response = await axios.get(`${apiTimeUrl.value}/${TimeZone}`)
      const data: Time = response.data
      time.value = data
      timeDataState.value = 'Success'
      return data
    } catch (error) {
      timeDataState.value = 'Error'
      return null
    }
  }

  return {
    time: computed(() => time.value),
    fetchTime,
    rawTime,
    meridian,
    processedTime,
    timeDataState
  }
})
