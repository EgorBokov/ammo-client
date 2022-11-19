<template>
  <TheContainer title="Каталог">
    <p v-if="pending">
      Загрузка...
    </p>
    <div v-else>
      <div class="flex gap-[10px]">
        <NuxtLink
            class="border-2 p-2 rounded-full border-[rgb(255,215,44)] cursor-pointer duration-300 hover:bg-bumblebee"
            v-for="link in data"
            :key="link.id"
            @click="$router.push('catalog' + link.link)"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
  const { pending, data } = useLazyFetch('http://localhost:3002/api/categories')
</script>
