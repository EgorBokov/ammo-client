<template>
  <div
      class="flex flex-col justify-between p-[10px] border-[rgba(0,0,0,.3)] border-[3px] cursor-pointer rounded-[6px] duration-300 hover:border-bumblebee"
      @click="$router.push(`/catalog/${route}/${id}`)"
  >
    <div class="flex flex-col justify-between h-full gap-[20px]">
      <div class="max-w-[320px] max-h-[320px]">
        <slot />
      </div>
      <div class="mt-4">
        <p class="text-m">{{ name }}</p>
        <p class="font-bold">{{ price }}₽</p>
      </div>
    </div>
    <button
        class="border-[2px] border-[#000] rounded-[4px] hover:bg-[rgba(0,0,0,.2)] py-[6px] duration-300 hover:bg-[#fff]"
    >
      К товару
    </button>
  </div>
</template>
<script setup>
defineProps({
  price: {
    type: [Number, String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  route: String,
  id: {
    type: Number,
    required: true
  }
})
</script>
