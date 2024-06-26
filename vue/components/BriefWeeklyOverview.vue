<script setup lang="ts">
defineProps({
  dayOfTheWeek: String,
  forecastTemperature: Number,
  forecastWeatherConditionIcon: String
})

import { useForecastWeatherDataStore } from '../../stores/forecast-weather-data'
import Skeleton from './Skeleton.vue'
const forecastWeatherData = useForecastWeatherDataStore()
</script>

<template>
  <div
    class="brief-weekly-overview-container"
    v-if="forecastWeatherData.forecastWeatherDataState === 'Success'"
  >
    <div class="day-of-the-week-container">
      <p>{{ dayOfTheWeek }}</p>
    </div>
    <div><img :src="forecastWeatherConditionIcon" alt="weather-icon" /></div>
    <p>{{ forecastTemperature }}&deg;</p>
  </div>
  <div v-else><Skeleton HeightRem="14.125" WidthRem="6" BorderRadiusRem="1.875" /></div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.brief-weekly-overview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1d;
  border-radius: 1.875rem;
  max-height: 14.125rem;
  gap: 1.94rem;
  max-width: 6rem;
  flex: 0 0 6rem;

  .day-of-the-week-container {
    width: 100%;
    height: 2.88rem;
    border-bottom: 0.0625rem solid #39393a;
    border-radius: 1.875rem 1.875rem 0rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      @include index.typography(1rem, 600, #e5e5e5, normal);
    }
  }

  :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    @include index.mediaContainers(3.125rem, 3.125rem);
  }

  :nth-child(3) {
    @include index.typography(2rem, 600, #fdfdfd, normal);
  }
}
</style>
