<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const basket = useState('basket', () => [])
</script>

<style lang="scss">

* {
  @apply m-0 p-0 box-border font-sans;
}
body {
  @apply bg-light-gray;
  min-height: 100%;
}
</style>
