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
          <img v-for="img in data.images" :src="`${config.public.backendURL}/${img}`" class="max-h-[360px]" :key="img" alt="Фотография товара">
        </template>
        <template v-else>
          <img :src="`${config.public.backendURL}/${data.images[0]}`" alt="Фотография товара">
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
      <div class="flex gap-[10px] justify-end p-[10px]">
        <div class="flex flex-col items-end gap-3">
          <div
            style="max-width: 200px"
            class="border-[2px] cursor-pointer text-center border-[#000] p-[10px] hover:bg-[rgba(0,0,0,.3)] rounded-[6px] duration-300"
            @click="addToCart"
          >
            Добавить в корзину
          </div>
          <input
            v-model="amountValue"
            class="border-[2px] rounded-[4px] p-[12px] focus:border-bumblebee focus-visible:border-bumblebee"
            type="number"
            min="1"
          >
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  import { BasketItem, INotificationBar } from "~/utils/interfaces";
  const config = useRuntimeConfig()
  const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/shields/${useRoute().params.id}`)
  const route = useRoute()
  const basket = useState<BasketItem[]>('basket')
  const isItemAdded = useState<INotificationBar>('isItemAdded')
  const amountValue = ref<number>(1)

  interface IProduct {
    name: string
    articul: number | string
    price: number| string
    image: string
    amount: number | string
    link: string
  }

  const addToCart = (): void => {
    const product: BasketItem = {
      name: data.value.name,
      articul: data.value.articul,
      price: data.value.price,
      amount: amountValue.value,
      image: data.value.images[0],
      link: route.fullPath
    }
    basket.value.push(product)
    isItemAdded.value.isOpened = true
    setTimeout(() => isItemAdded.value.isOpened = false, 3000)
    amountValue.value = 1
  }
</script>
