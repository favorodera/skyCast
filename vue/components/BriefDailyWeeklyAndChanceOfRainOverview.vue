<script setup lang="ts">
import BriefDailyOverview from './BriefDailyOverview.vue'
import BriefWeeklyOverview from './BriefWeeklyOverview.vue'
import { useDaysOfTheWeekStore } from '../../stores/days-of-the-week'
import { useForecastWeatherDataStore } from '../../stores/forecast-weather-data'
const forecastWeatherData = useForecastWeatherDataStore()
const daysOfTheWeek = useDaysOfTheWeekStore()
</script>

<template>
  <section>
    <BriefDailyOverview />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 1) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.secondDayTemperature"
      forecastWeatherConditionIcon=""
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 2) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.thirdDayTemperature"
      forecastWeatherConditionIcon=""
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 3) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fourthDayTemperature"
      forecastWeatherConditionIcon=""
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 4) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fifthDayTemperature"
      forecastWeatherConditionIcon=""
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 5) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.sixthDayTemperature"
      forecastWeatherConditionIcon=""
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 6) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.seventhDayTemperature"
      forecastWeatherConditionIcon=""
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  gap: 2.44rem;
}
</style>
3
