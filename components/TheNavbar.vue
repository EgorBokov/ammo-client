<template>
  <div class="bg-[#fff] h-[80px] px-[20px] py-[1rem] flex items-center justify-between shadow-[]">
    <p class="font-bold cursor-pointer" @click="$router.push('/')">Амуниция РФ</p>
    <nav class="flex items-center gap-[10px]">
      <NuxtLink
          v-for="item in links"
          :key="item.id"
          :to="item.href"
          class="block p-[15px] text-xs lg:text-base text-black rounded-[100px] decoration-0 duration-300 hover:tracking-[0.4px] hover:bg-[rgba(255,215,44,1)]"
          :class="checkCurrent(item.href)"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
    <div
        @click="$router.push('/basket')"
        class="hidden rounded-[100px] md:flex w-[40px] h-[40px] cursor-pointer justify-center items-center relative duration-300 hover:bg-[rgba(0,0,0,0.1)]"
    >
      <div
          v-if="cartAmount?.length"
          class="flex absolute top-[-4px] right-[-5px] rounded-[100px] justify-center items-center bg-[rgba(255,215,44,1)] w-[25px] h-[24px] text-[12px] font-bold"
      >
        {{ cartAmount?.length > 99 ? '99+' : cartAmount?.length }}
      </div>
      <img class="w-[24px] h-[23px]" src="../assets/cart.svg" alt="картинка корзинки" />
    </div>
  </div>
</template>

<script setup lang="ts">
  //eslint-disable-next-line
  const cartAmount = useState('basket')
  const currentRoute = computed(() => useRouter().currentRoute.value.fullPath)

  const checkCurrent = (path: string ): (string | '') => {
    if (currentRoute.value.includes(path)) {
      return 'bg-[rgba(0,0,0,0.3)]'
    }
    return ''
  }

  const links = [
    {id: 1, name: 'Каталог', href: '/catalog'},
    {id: 2, name: 'Доставка и оплата', href: '/delivery-and-payment'},
    {id: 3, name: 'О нас', href: '/about-us'},
  ]
</script>
