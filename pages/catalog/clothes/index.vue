<template>
  <TheContainer title="Одежда">
    <div v-if="pending" class="flex justify-center items-center h-[100%]">
      <img src="/spinner.svg" class="animate-spin">
    </div>
    <div
        v-else
        class="p-[20px] grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]"
    >
      <TheProductItem
          v-for="item in data"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :old-price="item.old_price"
          route="clothes"
      >
        <img class="max-h-[200px]" :src="`${config.public.backendURL}/${item.image}`" alt="Изображение товара">
      </TheProductItem>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/clothes`)
</script>
