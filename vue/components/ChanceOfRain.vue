<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js'
import * as chartConfig from '../../ts/chartConfig'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = ref(chartConfig.data)
const chartOptions = ref(chartConfig.options)





</script>

<template>
  <div class="chance-of-rain-container">
    <Bar :data="chartData" :options="chartOptions" />
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
