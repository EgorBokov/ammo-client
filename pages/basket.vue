<template>
  <TheContainer title="Моя корзина">
    <div v-if="basket.length">
      <div class="flex items-center justify-between">
        <button
            class="bg-bumblebee duration-300 hover:bg-light-gray px-[10px] py-[6px] rounded-[10px] cursor-pointer"
            @click="createOrder"
        >
          Оформить заказ
        </button>
        <p class="text-right">Общая сумма заказа:
          <span class="font-bold">{{ totalPrice }}</span> ₽
        </p>
      </div>
      <div class="mt-[10px] grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]">
        <div
            v-for="(item, idx) in basket"
            class="relative cursor-pointer rounded-[10px] border-2 border-light-gray p-[5px]"
        >
          <div
              @click="removeFromBasket(idx)"
              class="absolute right-[5px] rounded-[6px] text-[#fff] hover:text-error bg-error border-2 w-[25px] duration-300 flex justify-center items-center h-[25px] border-error hover:bg-[#fff]"
          >
            ×
          </div>
          <img
              :src="`${BACKEND_URL}/${item.image}`"
              alt="Изображение товара"
              class="max-h-[200px]"
          >
          <div>
            <span class="font-bold block">{{ item.name }}</span>
            <span class="font-bold block">{{ moneyConvert(item.price) }}</span>
            <span class="block"><span class="font-bold">Количество:</span> {{ item.amount }} </span>
            <span class="block">
              <span v-if="item.size" class="font-bold">Размер:</span>{{ item.size }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="font-bold text-2xl">Ваша корзина пуста!</h1>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  import {moneyConvert} from "~/utils/moneyConvert";
  import { BasketItem, IModalWindow } from "~/utils/interfaces";

  const config = useRuntimeConfig()
  const BACKEND_URL = config.public.backendURL

  const basket = useState<BasketItem[]>('basket')
  const modal = useState<IModalWindow>('modalWindow')

  const totalPrice = computed(() => {
    let _totalPrice = 0;

    if (basket.value.length) {
      basket?.value?.forEach(item => _totalPrice += item.price * item.amount)
    }

    return _totalPrice
  })

  const commonValue = computed(() => {
    let totalAmount = 0
    if (basket.value.length) {
      basket.value.forEach(item => {
        totalAmount += Number(item.amount)
      })
    }
    return totalAmount
  })

  useHead({
    title: `Коризна | Кол-во: ${commonValue.value < 100 ? commonValue.value : '99+' }`
  })

  const removeFromBasket = (id: number) => {
    basket.value = [...basket.value.filter((item, idx) => idx !== id)]
  }

  const createOrder = (): void => {
    modal.value.name = 'formModal'
    modal.value.isOpened = true
  }
</script>
