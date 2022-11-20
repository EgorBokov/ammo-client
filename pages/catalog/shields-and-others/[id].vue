<template>
  <TheContainer title="Щиты и прочее">
    <div v-if="pending">Loading...</div>

    <div v-else>
      <TheProductInside
          :name="data.name"
          :price="data.price"
          :id="data.id"
          :description="data.description"
          :annotation="data?.annotation"
          :extraInfo="data?.extra_info"
      >
        <template v-if="data.images.length > 1">
          <img v-for="img in data.images" :src="`http://localhost:3002/${img}`" alt="Фотография товара">
        </template>
        <template v-else>
          <img :src="`http://localhost:3002/${data.images[0]}`" alt="Фотография товара">
        </template>
        <template v-slot:description>
          <div v-if="data?.annotation" class="mt-[10px]">
            <span class="font-bold">Описание: </span>
            <p>{{ data?.annotation }}</p>
          </div>
          <div v-if="data?.extra_info" class="mt-[10px]">
            <span class="font-bold">Дополнительно:</span>
            <p>{{ data?.extra_info }}</p>
          </div>
        </template>
      </TheProductInside>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  const { pending, data } = useLazyFetch(`http://localhost:3002/api/shields/${useRoute().params.id}`)
</script>