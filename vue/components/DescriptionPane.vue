<script setup lang="ts">
defineProps({
  firstDescription: String,
  secondDescription: String,
  thirdDescription: String,
  maxWidth: Number
})
</script>

<template>
  <div class="description-pane" :style="{ 'max-width': maxWidth + 'rem' }">
    <p>{{ firstDescription }}</p>
    <p>{{ secondDescription }}</p>
    <p>{{ thirdDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.description-pane {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.875rem;
}

p {
  @include index.typography(1.25rem, 500, #ffffff, normal);
}
</style>
