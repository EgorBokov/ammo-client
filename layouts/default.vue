<template>
  <div class="relative flex h-full flex-col justify-between pb-[10px] h-[100%]">
    <div
        class="fixed w-full h-full bg-[rgba(0,0,0,0.3)]"
        @click="isSidebarOpened = false"
        v-if="isSidebarOpened"
    />
    <div
        class="fixed bg-white max-w-[320px] w-full h-full p-[10px] duration-300"
        :class="isSidebarOpened ? 'translate-x-0' : 'translate-x-[-320px]'"
        @click.stop
    >
      <div class="flex justify-end">
        <div
            class="w-[25px] h-[25px] hover:bg-light-gray rounded-full duration-300 flex justify-center items-center cursor-pointer"
            @click="isSidebarOpened = false"
        >
          ✕
        </div>
      </div>
      <nav class="mt-[10px]">
        <NuxtLink
            v-for="item in links"
            :key="item.id"
            :to="item.href"
            class="block select-none p-[15px] text-xs lg:text-base text-black rounded-[100px] decoration-0 duration-300 hover:tracking-[0.4px] hover:bg-[rgba(255,215,44,1)]"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
    <div
        v-if="modalWindow.isOpened && modalWindow.name === 'formModal'"
        class="fixed top-0 left-0 w-full h-full z-20">
      <TheModal />
    </div>
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
          <img class="w-[24px] h-[23px]" src="/cart.svg" alt="картинка корзинки" />
        </div>
      </div>
    </div>
    <div
        class="fixed top-[20px] duration-500 rounded-[10px] text-[#fff] px-[20px] py-[10px] flex justify-between items-center gap-5"
        :class="[isItemAdded.isOpened ? 'translate-x-[20px]' : 'translate-x-[-1000px]', isItemAdded.color ? `bg-${isItemAdded.color}` : 'bg-success']"
    >
      <div>
        {{ isItemAdded.title }}
      </div>
      <div
          class="flex justify-center items-center cursor-pointer duration-300 hover:bg-[#fff] rounded-full w-[20px] h-[20px]"
          @click="isItemAdded.isOpened = false"
      >
        &#10006;
      </div>
    </div>
    <header>
      <TheNavbar />
    </header>
    <main class="h-full min-h-[100%]">
      <slot />
    </main>
    <footer class="text-center text-xs text-[rgba(0,0,0,0.5)]">
      © 2022г. ООО "Доброе Дело".  Все права защищены.
    </footer>
  </div>
</template>
<script setup lang="ts">
  interface ILinks {
    id: number
    name: string
    href: string
  }

  const cartAmount = useState('basket')
  const isItemAdded = useState('isItemAdded', () => ({
    color: 'success',
    title: 'Товар успешно добавлен в корзину',
    isOpened: false
  }))

  const modalWindow = useState('modalWindow', () => ({
    name: '',
    isOpened: true
  }))

  const isSidebarOpened = useState('isSidebarOpened', () => false)

  const links: Array<ILinks> = [
    {id: 1, name: 'Главная страница', href: '/'},
    {id: 2, name: 'Каталог', href: '/catalog'},
    {id: 3, name: 'Доставка и оплата', href: '/delivery-and-payment'},
    {id: 4, name: 'О нас', href: '/about-us'}
  ]
</script>
