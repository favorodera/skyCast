<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeatherDataStore } from '../../stores/weather-data'
const weatherDataStore = useWeatherDataStore()
onMounted(() => {
  weatherDataStore.fetchWeatherData()
})
</script>

<template>
  <div class="brief-daily-overview-container">
    <div class="date-and-time">
      <p>Friday</p>
      <p>{{ weatherDataStore.localtime }} AM</p>
    </div>
    <div class="temperature-and-weather-icon-container">
      <p>{{ weatherDataStore.cloud }}</p>
    </div>
    <div class="brief-daily-details"></div>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.brief-daily-overview-container {
  background-color: #1b1b1d;
  max-width: 15.0625rem;
  height: 14.125rem;
  border-radius: 1.5625rem;
  align-items: center;
}

.date-and-time {
  max-height: 3.5rem;
  max-width: 100%;
  padding: 1.13rem 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.5625rem 1.5625rem 0rem 0rem;
  border-bottom: 0.0625rem solid #39393a;

  p {
    @include index.typography(1rem, 600, #e5e5e5, normal);
  }
}
</style>
