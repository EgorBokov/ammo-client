<template>
  <TheContainer title="Рюкзаки">
    <div v-if="pending">
      Loading...
    </div>
    <div
        v-else
        class="p-[20px] grid grid-cols-3 gap-[10px]"
    >
      <TheProductItem
          v-for="item in data"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          price="2500-4000"
          route="backpacks"
      >
        <img class="max-h-[200px]" :src="`http://localhost:3002${item.image}`" alt="Изображение товара">
      </TheProductItem>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
const { pending, data } = useLazyFetch('http://localhost:3002/api/backpacks')
</script>
