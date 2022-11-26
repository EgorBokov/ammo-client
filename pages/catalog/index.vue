<template>
  <TheContainer title="Каталог">
    <p v-if="pending">
      Загрузка...
    </p>
    <div v-else>
      <div class="flex gap-[10px] flex-wrap">
        <NuxtLink
            class="border-2 min-w-[92px] p-2 rounded-full border-[rgb(255,215,44)] cursor-pointer duration-300 hover:bg-bumblebee text-xs lg:text-base"
            v-for="link in data"
            :key="link.id"
            @click="$router.push('catalog' + link.link)"
        >
          <div class="flex items-center gap-[5px]">
            <img class="w-[20px] h-[20px]" :src="`${BACKEND_URL}${link.image}`" alt="Logo">
            <span class="block">{{ link.name }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
  const config = useRuntimeConfig()
  const BACKEND_URL = config.public.backendURL
  const { pending, data } = useLazyFetch(`${BACKEND_URL}/api/categories`)
</script>
