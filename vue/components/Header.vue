<script setup lang="ts">
import { ref } from 'vue'
import { useAstronomyDataStore } from '../../stores/astronomy-data'
import { useCurrentWeatherDataStore } from '../../stores/current-weather-data'
import { useForecastWeatherDataStore } from '../../stores/forecast-weather-data'
import Skeleton from './Skeleton.vue'
import { useOtherCitiesCurrentWeatherDataStore } from '../../stores/other-cities-current-weather-data'

const forecastWeatherData = useForecastWeatherDataStore()
let inputedLocation = ref('')
const currentWeatherData = useCurrentWeatherDataStore()
const astronomyData = useAstronomyDataStore()
const otherCitiesCurrentWeatherData = useOtherCitiesCurrentWeatherDataStore()
</script>

<template>
  <header>
    <div class="location-container">
      <div class="location-pin-icon">
        <img src="../../assets/icons/location-pin.svg" alt="location-pin" loading="lazy" />
      </div>
      <p class="location" v-if="currentWeatherData.currentWeatherDataState === 'Success'">
        {{ currentWeatherData.location }}
      </p>
      <div v-else>
        <Skeleton HeightRem="1.5" WidthRem="11.625" BorderRadiusRem="0.5" />
      </div>
    </div>

    <form
      method="get"
      @submit.prevent="
        () => {
          ;[
            currentWeatherData.fetchCurrentWeatherData(inputedLocation),
            forecastWeatherData.fetchForecastWeatherData(inputedLocation),
            astronomyData.fetchAstronomyData(inputedLocation),
            otherCitiesCurrentWeatherData.fetchOtherCitiesWeatherData()
          ]
        }
      "
    >
      <div class="search-icon">
        <img src="../../assets/icons/search.svg" alt="search" loading="lazy" />
      </div>
      <input
        type="search"
        name="location-input"
        id="location-input"
        placeholder="Search City"
        v-model="inputedLocation"
      />
    </form>

    <a
      href="https://github.com/favorodera/skyCast"
      target="_blank"
      rel="noopener noreferrer"
      class="github-icon"
    >
      <img src="../../assets/icons/github.svg" alt="github" />
    </a>
  </header>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

header {
  height: 3.125rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.location-container {
  max-width: max-content;
  height: 1.5rem;
  display: flex;
  gap: 0.62rem;
  flex: 1 1 11.625rem;
  align-items: center;
  justify-content: center;
}

.location-pin-icon {
  @include index.mediaContainers(1.5rem, 1.5rem);
}

.location {
  @include index.typography(1rem, 400, #fefefe, normal);
}

form {
  max-width: 30.75rem;
  height: 2.875rem;
  background-color: #1e1e1e;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.62rem;
  padding: 0rem 0rem 0rem 1.81rem;
  flex: 1 1 30.75rem;
}

.search-icon {
  @include index.mediaContainers(1.5rem, 1.5rem);
}

input {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  padding: 0.69rem 0rem 0.69rem 0rem;
  text-transform: capitalize;
  @include index.typography(0.875rem, 400, #ededed, normal);
}

input::placeholder {
  @include index.typography(0.875rem, 400, #ededed, normal);
}

input::-webkit-search-cancel-button {
  display: none;
}

.github-icon {
  @include index.mediaContainers(2.5rem, 2.5rem);
  border-radius: 2.5rem;
}
</style>
