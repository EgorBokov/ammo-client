<template>
  <TheContainer title="Аптечки">
    <div v-if="pending" class="flex justify-center items-center h-[100%]">
      <img src="/spinner.svg" class="animate-spin">
    </div>
    <div v-else class="p-[20px]">
      <div>
        <div class="flex flex-col min-[565px]:flex-row items-start gap-[10px]">
          <div class="max-w-[320px] max-h-[320px]">
            <img :src="`${config.public.backendURL}/${data.image}`" alt="Фотография товара">
          </div>
          <div class="flex flex-col gap-[10px]">
            <div>
              <p class="text-xl">{{ data.name }}</p>
              <p class="font-bold"> {{ data.price }}₽</p>
            </div>
            <div class="mt-[20px]">
              <div v-for="(item, idx) in data.description" :key="idx">
                <span class="font-bold">{{ item[0] }}</span>
                :
                <span>{{ item[1] }}</span>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px" v-if="data.contents">
          <div class="font-bold">
            Содержимое:
          </div>
          <div>
            <div v-for="(item, index) in data.contents" :key="index">
              {{ index + 1}}. {{ item + '' }}
            </div>
          </div>
        </div>
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
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  import { BasketItem, INotificationBar } from "~/utils/interfaces";

  const config = useRuntimeConfig()
  const route = useRoute()
  const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/medicine/${route.params.id}`)
  const amountValue = ref(1)
  const basket = useState<BasketItem[]>('basket')
  const isItemAdded = useState<INotificationBar>('isItemAdded')

  const addToCart = () => {
    const product: BasketItem = {
      name: data.value.name,
      price: data.value.price,
      articul: data.value.articul,
      image: data.value.image,
      amount: amountValue.value,
      link: route.fullPath
    }
    basket.value.push(product)
    isItemAdded.value.isOpened = true
    setTimeout(() => isItemAdded.value.isOpened = false, 3000)
    amountValue.value = 1
  }
</script>
