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
              <p class="font-bold"> {{ formattedPrice }}</p>
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
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: { type: Number, required: true},
    name: {type: String, required: true },
    price: { type: Number, required: true },
    description: { type: Array, default: () => ([])},
  })

  const formattedPrice = computed(() => new Intl.NumberFormat('ru-RU', {
    currency: "RUB",
    style: "currency",
    maximumFractionDigits: 0
  }).format(props.price))
</script>
