<script setup lang="ts">
import Header from './components/Header.vue'
import DescriptionPane from './components/DescriptionPane.vue'
import BriefDailyWeeklyAndChanceOfRainOverview from './components/BriefDailyWeeklyAndChanceOfRainOverview.vue'
</script>

<template>
  <Header />
  <DescriptionPane
    firstDescription="Today"
    secondDescription="Next 7days"
    thirdDescription="Chance Of Rain"
  />
  <BriefDailyWeeklyAndChanceOfRainOverview />
  <DescriptionPane firstDescription="Today's Overview" thirdDescription="Other Cities" />
</template>
