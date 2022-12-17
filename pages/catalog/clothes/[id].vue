<template>
  <TheContainer title="Одежда">
    <div v-if="pending">Loading...</div>
    <div v-else>
      <TheProductInside
          :name="data?.name"
          :price="data?.price"
          :id="data?.id"
          :description="data?.description"
      >
        <img :src="`${config.public.backendURL}/${data?.image}`" class="max-h-[300px]" alt="Фотография товара">
        <template v-slot:description>
          <div v-if="data?.extra_info" class="mt-[10px]">
            <p class="font-md font-bold">{{ data.extra_info[0] }}</p>
            <p v-for="text in data.extra_info.slice(1)">
              {{ text }}
            </p>
          </div>
          <div v-if="data?.sizes?.length" class="flex flex-wrap gap-3 mt-[10px]">
            <div
              v-for="item in data.sizes"
              :key="item.id"
              class="rounded-[100px] hover:bg-bumblebee flex justify-center items-center w-[40px] h-[40px] cursor-pointer duration-300"
              :class="[chosenSize === item ? 'bg-bumblebee' : 'bg-light-gray']"
              @click="chosenSize = item"
            >
              {{ item }}
            </div>
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
const config = useRuntimeConfig()
const route = useRoute()
const { pending, data } = useLazyFetch(`${config.public.backendURL}api/clothes/${route.params.id}`)
const basket = useState('basket')
const isItemAdded = useState('isItemAdded')
const amountValue = ref(1)
const chosenSize = ref(data?.value?.sizes[0] || null)

interface IProduct {
  name: string
  articul: number | string
  price: number| string
  image: string
  amount: number | string
  link: string
  size?: string | number
}

const addToCart = () => {
  const product: IProduct = {
    name: data.value.name,
    price: data.value.price,
    image: data.value.image,
    amount: amountValue.value,
    link: route.fullPath,
    articul: data.value.articul
  }

  if (chosenSize.value) {
    product["size"] = chosenSize.value
  }
  basket.value.push(product)
  isItemAdded.value.isOpened = true
  setTimeout(() => isItemAdded.value.isOpened = false, 3000)
  amountValue.value = 1
}
</script>
