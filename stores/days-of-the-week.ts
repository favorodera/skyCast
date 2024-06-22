import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useDaysOfTheWeekStore = defineStore('days-of-the-week', () => {
  const baseDate = ref(new Date())

  const daysOfWeek = computed(() => {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  })

  const currentDayIndex = computed(() => new Date(baseDate.value).getDay())

  return {
    daysOfWeek,
    currentDayIndex
  }
})
