<template>
  <TheContainer title="Одежда">
    <div v-if="pending">Loading...</div>
    <div v-else>

    </div>
  </TheContainer>
</template>
<script setup lang="ts">
const { pending, data } = useLazyFetch('http://localhost:3002/api/clothes')
</script>
