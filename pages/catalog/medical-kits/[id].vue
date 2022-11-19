<template>
  <TheContainer title="Аптечки">
    <div v-if="pending"></div>
    <div v-else class="p-[20px]">
      <div>
        <div class="flex items-start gap-[10px]">
          <div class="max-w-[320px] max-h-[320px]">
            <img :src="`http://localhost:3002/${data.image}`" alt="Фотография товара">
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
        <div class="flex flex-col gap-[10px] max-w-[200px]" style="align-items: end">
          <div
              style="max-width: 200px"
              class="border-[2px] cursor-pointer text-center border-[#000] p-[10px] hover:bg-[rgba(0,0,0,.2)] rounded-[6px] hover:bg-[#fff] duration-300"
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
  const { pending, data } = useLazyFetch(`http://localhost:3002/api/medicine/${route.params.id}`)
  const amountValue = ref(1)
</script>