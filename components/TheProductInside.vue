<template>
  <div class="p-[10px] flex flex-col">
    <div>
      <div class="flex flex-col gap-[10px]">
        <div class="grid grid-cols-2">
          <slot />
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-[10px]">
            <div>
              <p class="text-xl">{{ name }}</p>
              <p class="font-bold"> {{ price }}₽</p>
            </div>
          </div>
          <div v-if="description.length">
            <p v-for="item in description" :key="item" class="mt-[10px]">
              <span class="font-bold">{{ item[0] }}</span>: {{ item[1] }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <slot name="description" />
    <div class="flex flex-col gap-[10px] max-w-[200px] self-end" style="align-items: end">
      <div
          style="max-width: 200px"
          class="border-[2px] cursor-pointer text-center border-[#000] p-[10px] hover:bg-[rgba(0,0,0,.3)] rounded-[6px] duration-300"
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
</template>

<script setup lang="ts">
  const amountValue = ref(1)

  defineProps({
    id: { type: Number, required: true},
    name: {type: String, required: true },
    price: { type: Number, required: true },
    description: { type: Array, default: () => ([])}
  })
</script>
