<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const totalCartAmount = useState('cart-amount', () => 0)

  const basket = useState('basket', () => [
    {id: 1, name: 'Аптечка'}
  ])
</script>

<style lang="scss">

* {
  @apply m-0 p-0 box-border font-sans;
}
body {
  @apply bg-light-gray;
}
</style>