<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>
<script setup lang="ts">
const { pending, data } = useLazyFetch(`http://localhost:3002/api/backpacks/${useRoute().params.id}`)
</script>