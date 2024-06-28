<script setup lang="ts">
import { useOtherCitiesCurrentWeatherDataStore } from '../../stores/other-cities-current-weather-data'
import Skeleton from './Skeleton.vue'
const otherCitiesData = useOtherCitiesCurrentWeatherDataStore()
</script>

<template>
  <div
    class="other-cities-container"
    v-if="otherCitiesData.otherCitiesCurrentWeatherDataState === 'Success'"
  >
    <div class="city">
      <div class="text">
        <p>{{ otherCitiesData.country[0] }}</p>
        <p>{{ otherCitiesData.city[0] }}</p>
        <p>{{ otherCitiesData.weatherCondition?.[0] }}</p>
      </div>
      <div class="weather-condition">
        <img :src="otherCitiesData.weatherConditionIcon?.[0]" alt="weather-condition" />
      </div>
    </div>

    <div class="city">
      <div class="text">
        <p>{{ otherCitiesData.country[1] }}</p>
        <p>{{ otherCitiesData.city[1] }}</p>
        <p>{{ otherCitiesData.weatherCondition?.[1] }}</p>
      </div>
      <div class="weather-condition">
        <img :src="otherCitiesData.weatherConditionIcon?.[1]" alt="weather-condition" />
      </div>
    </div>

    <div class="city">
      <div class="text">
        <p>{{ otherCitiesData.country[2] }}</p>
        <p>{{ otherCitiesData.city[2] }}</p>
        <p>{{ otherCitiesData.weatherCondition?.[2] }}</p>
      </div>
      <div class="weather-condition">
        <img :src="otherCitiesData.weatherConditionIcon?.[2]" alt="weather-condition" />
      </div>
    </div>

    <div class="city">
      <div class="text">
        <p>{{ otherCitiesData.country[3] }}</p>
        <p>{{ otherCitiesData.city[3] }}</p>
        <p>{{ otherCitiesData.weatherCondition?.[3] }}</p>
      </div>
      <div class="weather-condition">
        <img :src="otherCitiesData.weatherConditionIcon?.[3]" alt="weather-condition" />
      </div>
    </div>
  </div>
  <div v-else><Skeleton HeightRem="32.5625" WidthRem="18.5625" BorderRadiusRem="1" /></div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.other-cities-container {
  width: 18.5625rem;
  height: 32.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
}

.city {
  width: 100%;
  height: 6.875rem;
  background-color: #1b1b1d;
  border-radius: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  width: max-content;
  max-height: 4.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.62rem;
  margin: 1rem 0rem 1rem 1.5rem;

  :nth-child(1) {
    @include index.typography(0.875rem, 400, #777777, normal);
  }

  :nth-child(2) {
    @include index.typography(1.25rem, 400, #ffffff, normal);
  }

  :nth-child(3) {
    @include index.typography(0.875rem, 400, #efefef, normal);
  }
}

.weather-condition {
  @include index.mediaContainers(3.125rem, 3.125rem);
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
