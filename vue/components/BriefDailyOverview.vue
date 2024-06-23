<script setup lang="ts">
import { useCurrentWeatherDataStore } from '../../stores/current-weather-data'
const currentWeatherData = useCurrentWeatherDataStore()
import { useDaysOfTheWeekStore } from '../../stores/days-of-the-week'
const daysOfTheWeek = useDaysOfTheWeekStore()
import { useAstronomyDataStore } from '../../stores/astronomy-data'
const astronomyData = useAstronomyDataStore()
</script>

<template>
  <div class="brief-daily-overview-container">
    <div class="date-and-time">
      <p>{{ daysOfTheWeek.daysOfWeek[(daysOfTheWeek.currentDayIndex + 0) % 7] }}</p>
      <p>
        {{ currentWeatherData.localtime }}
        {{ currentWeatherData.meridian }}
      </p>
    </div>
    <div class="temperature-and-weather-icon-container">
      <p>{{ currentWeatherData.currentCloud === 0 ? 0 : currentWeatherData.currentCloud }}&deg;</p>
      <div><img :src="currentWeatherData.currentWeatherConditionIcon" alt="weather-icon" /></div>
    </div>
    <div class="brief-daily-details">
      <div>
        <p>Real Feel:</p>
        <p>{{ currentWeatherData.realFeel }}&deg;C</p>
      </div>
      <div>
        <p>Sunrise:</p>
        <p>{{ astronomyData.sunrise }}</p>
      </div>
      <div>
        <p>Pressure:</p>
        <p>{{ currentWeatherData.pressure }}MB</p>
      </div>
      <div>
        <p>Sunset:</p>
        <p>{{ astronomyData.sunset }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.brief-daily-overview-container {
  background-color: #1b1b1d;
  max-width: 15.0625rem;
  height: 14.125rem;
  border-radius: 1.5625rem;
  flex: 0 0 15.0625rem;
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

.temperature-and-weather-icon-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 14.3125rem;
  max-height: 3.3125rem;
  padding-inline: 0.88rem;
  margin-top: 0.69rem;

  p {
    @include index.typography(2.25rem, 600, #e5e5e5, normal);
  }

  div {
    @include index.mediaContainers(4.125rem, 4rem);

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.brief-daily-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
  margin-top: 1.375rem;
  padding-inline: 0.88rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    flex: 0 0 5rem;

    p {
      width: max-content;
    }

    :nth-child(1) {
      @include index.typography(0.75rem, 400, #e5e5e5, 150.547%);
    }

    :nth-child(2) {
      @include index.typography(0.75rem, 600, #e5e5e5, 150.547%);
    }
  }
}
</style>
