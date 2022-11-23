<template>
  <TheContainer title="Рюкзаки">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else class="p-[20px]">
      <div class="flex flex-col">
        <div class="flex items-start gap-[10px]">
          <div class="max-w-[320px] max-h-[320px]">
            <img :src="`http://localhost:3002/${data.image}`" alt="Фотография товара">
          </div>
          <div class="flex flex-col gap-[10px]">
            <div>
              <p class="text-xl">{{ data.name }}</p>
              <p class="font-bold"> {{ prices[currentPrice] }}₽</p>
            </div>
            <div class="mt-[20px] flex items-center gap-[10px]" v-if="data?.sizes">
              <div
                  v-for="(item, idx) in data.sizes"
                  :key="idx"
                  class="rounded-[100px] bg-light-gray px-[10px] py-[6px] duration-300 hover:bg-bumblebee cursor-pointer"
                  :class="[chosenSize === item ? 'bg-bumblebee': '']"
                  @click="chosenSize = item; currentPrice = idx"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[10px] max-w-[200px] self-end" style="align-items: end">
          <div
              style="max-width: 200px"
              class="border-[2px] cursor-pointer text-center border-[#000] p-[10px] hover:bg-[rgba(0,0,0,.2)] rounded-[6px] hover:bg-[#fff] duration-300"
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
const route = useRoute()
const basket = useState('basket')
const { pending, data } = useLazyFetch(`http://localhost:3002/api/backpacks/${useRoute().params.id}`)
const amountValue = ref(1)
const chosenSize = ref(data.value?.sizes[0])
const prices = [2500, 3000, 3500, 4000, 4000]
const currentPrice = ref(0)

const addToCart = () => {
  const product = {
    name: data.value.name,
    articul: data.value.articul,
    size: chosenSize.value,
    price: prices[currentPrice.value],
    amount: amountValue.value,
    image: data.value.image,
    link: route.fullPath
  }
  console.log(product)
  basket.value.push(product)
  console.log(basket)
}
</script>