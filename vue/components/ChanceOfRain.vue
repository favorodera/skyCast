<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import * as chartConfig from '../../ts/chartConfig';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = ref(chartConfig)
</script>

<template>
  <div class="chance-of-rain-container">
    <Bar :data="chartData.data" :options="chartData.options" />
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.chance-of-rain-container {
  max-width: 18.5625rem;
  height: 14.125rem;
  flex: 0 0 18.5625rem;
}
</style>
