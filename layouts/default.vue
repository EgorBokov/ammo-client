<template>
  <div class="flex flex-col justify-between pb-[10px] h-[100%]">
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