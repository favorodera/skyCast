<script setup lang="ts">
defineProps({
  dataHeader: String,
  dataValue: Number,
  dataUnit: String
})
import { useCurrentWeatherDataStore } from '../../stores/current-weather-data'
const currentWeatherData = useCurrentWeatherDataStore()
import Skeleton from './Skeleton.vue'
</script>

<template>
  <div class="main-daily-data" v-if="currentWeatherData.currentWeatherDataState === 'Success'">
    <p class="data-header">{{ dataHeader }}</p>
    <slot />
    <p class="data-value">
      {{ dataValue }}<span>{{ dataUnit }}</span>
    </p>
  </div>
  <div v-else><Skeleton WidthRem="18.125" HeightRem="15.3125" BorderRadiusRem="0.9375" /></div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.main-daily-data {
  width: 18.125rem;
  height: 15.3125rem;
  background-color: #1b1b1d;
  border-radius: 0.9375rem;
  flex: 0 0 18.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.data-header {
  @include index.typography(1rem, 500, #ffffff, normal);
  align-self: flex-start;
  margin: 1.62rem 0rem 0rem 0.88rem;
}

.data-value {
  @include index.typography(1rem, 600, #ffffff, normal);
  margin-bottom: 1.62rem;

  span {
    @include index.typography(0.875rem, 400, #ffffff, normal);
  }
}
</style>
