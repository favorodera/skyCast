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
      :forecastWeatherConditionIcon="forecastWeatherData.secondDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 2) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.thirdDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.thirdDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 3) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fourthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.fourthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 4) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.fifthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.fifthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 5) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.sixthDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.sixthDayForecastWeatherConditionIcon"
    />
    <BriefWeeklyOverview
      :dayOfTheWeek="
        daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 6) % 7].slice(0, 3).toUpperCase()
      "
      :forecastTemperature="forecastWeatherData.seventhDayTemperature"
      :forecastWeatherConditionIcon="forecastWeatherData.seventhDayForecastWeatherConditionIcon"
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
