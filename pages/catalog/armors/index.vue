<template>
  <TheContainer title="Бронежилеты и шлемы">
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
          :price="item.price"
          route="armors"
      >
        <img :src="`http://localhost:3002/${item.images[0]}`" alt="Изображение товара">
      </TheProductItem>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  const { pending, data } = useLazyFetch('http://localhost:3002/api/guards')
</script>
