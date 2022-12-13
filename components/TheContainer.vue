<template>
    <div class="flex flex-col gap-[8px] items-center px-[10px] min-[620px]:px-[25px] py-[10px]">
      <div v-if="title" class="p-[10px] w-full bg-[#fff] rounded-[15px] max-w-[1000px] min-h-[50px]">
        <TheTitle :content="title" />
      </div>
      <div
        class="p-[10px] w-full rounded-[15px] max-w-[1000px] min-h-[50px]"
        :class="[isTransparentContent ? '' : 'bg-[#fff]']"
      >
        <slot />
      </div>
    </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: null
    },
    isTransparentContent: {
      type: Boolean,
      default: false
    }
  })
</script>
