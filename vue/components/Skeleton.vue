<script setup lang="ts">
defineProps({
  HeightRem: String,
  WidthRem: String,
  BorderRadiusRem: String,
  HeightPercent: String,
  WidthPercent: String,
  BorderRadiusPercent: String,
  
})
</script>

<template>
  <div
    class="skeleton"
    :style="{
      height: HeightRem + 'rem' || HeightPercent + '%',
      width: WidthRem + 'rem' || WidthPercent + '%',
      borderRadius: BorderRadiusRem + 'rem' || BorderRadiusPercent + '%'
    }"
  ></div>
</template>

<style scoped lang="scss">
.skeleton {
  display: inline-block;
  background-color: #1b1b1d;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right,
    #1b1b1d 0,
    #ffffff10 20%,
    #1b1b1d80 60%,
    #1b1b1d 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
