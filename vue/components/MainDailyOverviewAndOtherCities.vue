<script setup lang="ts">
import MainDailyWeatherData from './MainDailyWeatherData.vue'
</script>

<template>
  <section>
    <div class="main-daily-data-container">
      <MainDailyWeatherData
        dataHeader="Wind Status"
        dataValue=""
        dataUnit="km/h"
      ></MainDailyWeatherData>
      <MainDailyWeatherData dataHeader="UV Index" dataValue="" dataUnit="UV"></MainDailyWeatherData>
      <MainDailyWeatherData dataHeader="Humidity" dataValue="" dataUnit="%"></MainDailyWeatherData>
      <MainDailyWeatherData
        dataHeader="Visibility"
        dataValue=""
        dataUnit="km"
      ></MainDailyWeatherData>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-width: 100%;
  display: flex;
  gap: 2.38rem;
  align-items: center;
  justify-content: flex-start;
}
.main-daily-data-container {
  max-width: 38.75rem;
  max-height: 32.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.87rem 2.5rem;
}
</style>
