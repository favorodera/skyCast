<script setup lang="ts">
defineProps({
  dataHeader: String,
  dataValue: String || Number,
  dataUnit: String
})
</script>

<template>
  <div class="main-daily-data">
    <p>{{ dataHeader }}</p>
    <slot />
    <p>
      {{ dataValue }}<span>{{ dataUnit }}</span>
    </p>
  </div>
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

  :nth-child(1) {
    @include index.typography(1rem, 500, #ffffff, normal);
    align-self: flex-start;
    margin: 1.62rem 0rem  0rem 0.88rem;
  }
  :nth-child(2) {
    @include index.typography(1rem, 600, #ffffff, normal);
    margin-bottom: 1.62rem ;

    span {
      @include index.typography(0.875rem, 400, #ffffff, normal);
    }
  }
}
</style>
