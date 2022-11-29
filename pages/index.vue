<template>
  <TheContainer
      title="Главная страница"
      isTransparentContent
  >
    <div v-if="pending">Loading...</div>
    <div v-else class="p-[10px] flex flex-col gap-3">
      <div class="flex gap-3">
        <div class="min-w-[180px] max-w-[180px] bg-[#fff] p-[10px] rounded-[20px]">
          <img src="../assets/guarantee.svg" alt="Знак качества">
        </div>
        <div class="flex flex-col rounded-[20px] p-[10px] bg-[#fff] w-full items-end">
          <h2 class="font-bold text-xl">+7(995)685-96-60</h2>
          <p>ammunition.rf@gmail.com</p>
        </div>
      </div>
      <div class="flex gap-3">
        <div class="flex flex-col gap-[10px] min-w-[180px] max-w-[180px] flex-wrap min-w-[150px] bg-[#fff] rounded-[20px] p-[10px]">
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
        <div class="rounded-[20px] p-[10px] bg-[#fff] w-full">
          <h1 class="text-xl font-bold">Почему именно мы? </h1>
          <article class="pt-[10px]">
            <header>
              <h2 class="font-bold">Гарантия качества</h2>
            </header>
            <section>
              <p class="text-sm">Мы являемся надежным поставщиком амуниции уже длительное время и успели зарекомендовать себя на рынке. У нас быстрая и отзывчивая техническая поддержка работающая 24/7, которая всегда вам поможет по любому вопросу.</p>
            </section>
          </article>
          <article class="pt-[10px]">
            <header>
              <h2 class="font-bold">Выгодные цены</h2>
              <section>
                <p class="text-sm">
                  Благодаря налаженной работе наших логистов в кооперации с зарекомендовавшими себя поставщиками, мы обеспечиваем нашим клиентам самые приемлемые и выгодные цены на рынке.
                </p>
              </section>
            </header>
          </article>
        </div>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
const BACKEND_URL = config.public.backendURL

useHead({
  title: "Амуниция РФ | Рюкзаки, бронижелеты, амуниция оптом",
  meta: [
    { name: "description", content: "Амуниция РФ Рюкзаки оптом Термобелье оптом Аптечки отптом Бронижелеты оптом Щиты оптом Купить рюкзаки оптом"}
  ]
})

const { pending, data } = useLazyFetch(`${BACKEND_URL}/api/categories`)
</script>
