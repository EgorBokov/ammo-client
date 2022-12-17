<template>
  <TheContainer title="Каталог">
    <p v-if="pending">
      Загрузка...
    </p>
    <div v-else>
      <div>
        <div
            class="flex gap-[10px] flex-wrap bg-white w-full rounded-[20px] max-w-[1000px] p-[10px]"
        >
          <NuxtLink
              class="border-2 min-w-[92px] p-2 rounded-full border-[rgb(255,215,44)] cursor-pointer duration-300 hover:bg-bumblebee text-xs lg:text-base"
              v-for="link in data"
              :key="link.id"
              @click="$router.push(`catalog${link.link}`)"
          >
            <div class="flex items-center gap-[5px]">
              <img class="w-[20px] h-[20px]" :src="`${BACKEND_URL}/${link.image}`" alt="Logo">
              <span class="block">{{ link.name }}</span>
            </div>
          </NuxtLink>
        </div>
        <div class="p-[20px] pt-[5px] w-full bg-[#fff] rounded-[15px] max-w-[1000px] min-h-[50px]">
          <TheTitle content="Популярные позиции" />
        </div>
        <div
            class="p-[20px] pt-0 grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]"
        >
          <TheProductItem
              v-for="item in popularPositions"
              :key="item.id"
              :id="item.productId"
              :name="item.name"
              :price="`${item.price}`"
              :route="item.route"
          >
            <img class="max-h-[200px]" :src="`${BACKEND_URL}/${item.image}`" alt="Изображение товара">
          </TheProductItem>
        </div>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
  import popularPositions from '~/utils/popularProducts';
  const config = useRuntimeConfig()
  const BACKEND_URL = config.public.backendURL
  const { pending, data } = useLazyFetch(`${BACKEND_URL}/api/categories`)

  useHead({
    title: 'Каталог товаров | Купить амуницию РФ',
    meta: [
        {
            name: 'description',
            content: 'Где купить амуницию Купить амуницию РФ Качественная амуниция Купить военное снаряжение'
        }
    ]
  })
</script>
