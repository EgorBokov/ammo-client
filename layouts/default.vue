<template>
  <div class="relative flex flex-col justify-between pb-[10px] h-[100%]">
    <div class="fixed bottom-[20px] right-[20px] md:hidden">
      <div class="relative">
        <div
            v-if="cartAmount?.length"
            class="z-[4] flex absolute top-[-4px] border-2 right-[-5px] rounded-[100px] justify-center items-center bg-[rgba(255,215,44,1)] w-[25px] h-[24px] text-[12px] font-bold"
        >
          {{ cartAmount?.length > 99 ? '99+' : cartAmount?.length }}
        </div>
        <div
            @click="$router.push('/basket')"
            class="rounded-[100px] flex w-[52px] h-[52px] cursor-pointer bg-bumblebee justify-center items-center relative duration-300 border-[2px]"
        >
          <img class="w-[24px] h-[23px]" src="../assets/cart.svg" alt="картинка корзинки" />
        </div>
      </div>
    </div>
    <header>
      <TheNavbar />
    </header>
    <main class="h-full">
      <slot />
    </main>
    <footer class="text-center text-xs text-[rgba(0,0,0,0.5)]">
      © 2022г. ООО "Доброе Дело".  All rights reserved.
    </footer>
  </div>
</template>
<script setup>
  const cartAmount = useState('basket')
</script>