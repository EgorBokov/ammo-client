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
      <div>
        <div class="p-[20px] w-full bg-[#fff] rounded-[15px] max-w-[1000px] min-h-[50px]">
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
            <img class="max-h-[200px]" :src="`${BACKEND_URL}${item.image}`" alt="Изображение товара">
          </TheProductItem>
        </div>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
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

  interface IPopularPosition {
    id: number;
    name: string;
    price: string;
    link: string;
    image: string;
    productId: number;
    route?: string;
  }

  const popularPositions: Array<IPopularPosition> = [
    { id: 1, name: "Разгрузочный жилет", price: '3000', link: '/catalog/armors/8', image: '/uploadguard.png', productId: 8, route: 'armors'},
    { id: 2, name: "Аптечка", price: '5200', link: '/catalog/medical-kits/1', image: '/medical-kit.png', productId: 1, route: 'medical-kits'},
    { id: 3, name: "Пуленепробиваемый шлем М88", price: '8200', link: '/catalog/armors/1', image: '/helmet1.png', productId: 1, route: 'armors'},
    { id: 4, name: "Тактические перчатки", price: '700', link: '/catalog/clothes/17', image: '/gloves.png', productId: 17, route: 'clothes'},
    { id: 5, name: "Экран", price: '2000', link: '/catalog/shields-and-others/2', image: '/shield2.png', productId: 2, route: 'shields-and-others'},
    { id: 6, name: "Рюкзак", price: '2500-4000', link: '/catalog/backpacks/2', image: '/backpack2.png', productId: 2, route: 'backpacks'},
    { id: 7, name: "Пуленепробиваемая вставная пластина", price: '10440', link: '/catalog/armors/4', image: '/plastine1.png', productId: 4, route: 'armors'},
  ]
</script>
