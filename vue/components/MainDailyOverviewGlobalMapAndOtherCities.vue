<script setup lang="ts">
import MainDailyWeatherData from './MainDailyWeatherData.vue'
import { useCurrentWeatherDataStore } from '../../stores/current-weather-data'
import GlobalMap from './GlobalMap.vue'
const currentWeatherData = useCurrentWeatherDataStore()
import OtherCities from './OtherCities.vue'
</script>

<template>
  <section>
    <div class="main-daily-data-container">
      <MainDailyWeatherData
        dataHeader="Wind Status"
        :dataValue="currentWeatherData.windStatus"
        dataUnit="km/h"
        ><div class="data-icon"><img src="../../assets/icons/wind.svg" alt="wind" /></div
      ></MainDailyWeatherData>
      <MainDailyWeatherData
        dataHeader="UV Index"
        :dataValue="currentWeatherData.uvIndex"
        dataUnit="UV"
        ><div class="data-icon"><img src="../../assets/icons/gauge.svg" alt="gauge" /></div
      ></MainDailyWeatherData>
      <MainDailyWeatherData
        dataHeader="Humidity"
        :dataValue="currentWeatherData.humidity"
        dataUnit="%"
        ><div class="data-icon"><img src="../../assets/icons/humidity.svg" alt="humidity" /></div
      ></MainDailyWeatherData>
      <MainDailyWeatherData
        dataHeader="Visibility"
        :dataValue="currentWeatherData.visibility"
        dataUnit="km"
        ><div class="data-icon"><img src="../../assets/icons/eye.svg" alt="eye" /></div
      ></MainDailyWeatherData>
    </div>
    <GlobalMap />
    <OtherCities />
  </section>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

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

.data-icon {
  @include index.mediaContainers(5.625rem, 5.625rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
