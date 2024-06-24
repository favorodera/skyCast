<script setup lang="ts">
defineProps({
  firstDescription: String,
  secondDescription: String,
  thirdDescription: String
})
</script>

<template>
  <section class="description-pane">
    <p>{{ firstDescription }}</p>
    <p>{{ secondDescription }}</p>
    <p>{{ thirdDescription }}</p>
  </section>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.description-pane {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.875rem;
  max-width: 78.3125rem;

  :nth-child(3) {
    width: 9.875rem;
  }
}

p {
  @include index.typography(1.25rem, 500, #ffffff, normal);
}
</style>
