<template>
  <TheContainer title="Бронежилеты и шлемы">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else>
      <TheProductInside
          :name="data?.name"
          :price="data?.price"
          :id="data?.id"
          :description="data?.description"
          :annotation="data?.prim"
          :extraInfo="data?.extra_info"
      >
        <template v-if="data.images.length > 1">
          <img v-for="img in data.images" :src="`http://localhost:3002/${img}`" class="max-h-[300px]" alt="Фотография товара">
        </template>
        <template v-else>
          <img :src="`http://localhost:3002/${data.images[0]}`" class="max-h-[300px]" alt="Фотография товара">
        </template>
        <template v-slot:description>
          <div v-if="data?.prim" class="mt-[10px]">
            <span class="font-bold">Описание: </span>
            <div class="flex items-center gap-3">
              <img src="../../../assets/alright.svg" class="w-[20px] h-[20px]" alt="Подтверждено" />
              {{ data?.prim }}
            </div>
          </div>
          <div v-if="data.is_sertified" class="mt-[10px]">
            <div class="flex items-center gap-3">
              <img src="../../../assets/alright.svg" class="w-[20px] h-[20px]" alt="Подтверждено" />
              Имеется сертификат
            </div>
          </div>
          <div v-if="data?.extra_info" class="mt-[10px]">
            <p class="font-md font-bold">{{ data.extra_info[0] }}</p>
            <p v-for="text in data.extra_info.slice(1)">
              {{ text }}
            </p>
          </div>
          <div v-if="data?.complectations" class="mt-[10px]">
            <p class="font-md font-bold">{{ data.complectations[0] }}</p>
            <p v-for="text in data.complectations.slice(1)">
              {{ text }}
            </p>
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
  const route = useRoute()
  const { pending, data } = useLazyFetch('http://localhost:3002/api/guards/' + route.params.id)
  const basket = useState('basket')
  const isItemAdded = useState('isItemAdded')

  const amountValue = ref(1)

  interface IProduct {
    name: string
    articul: number | string
    price: number| string
    image: string
    amount: number | string
    link: string
    description: Array<string[]>
  }

  const addToCart = () => {
    const product: IProduct = {
      name: data.value.name,
      articul: data.value?.articul,
      price: data.value.price,
      image: data.value.images[0],
      amount: amountValue.value,
      link: route.fullPath,
      description: data.value.description.slice(0, 3)
    }
    basket.value.push(product as IProduct)
    isItemAdded.value.isOpened = true
    setTimeout(() => isItemAdded.value.isOpened = false, 3000)
    amountValue.value = 1
  }
</script>
