<template>
  <TheContainer title="Бронежилеты и шлемы">
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
          route="armors"
      >
        <img :src="`${config.public.backendURL}/${item.images[0]}`" alt="Изображение товара" class="max-h-[320px]">
      </TheProductItem>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/guards`)
</script>
