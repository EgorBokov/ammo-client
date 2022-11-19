<template>
  <TheContainer title="Моя корзина">
    <div v-if="cartAmount">
      <p class="text-right">Общее количество товара:
        <span class="font-bold">{{ cartAmount }}</span> ед.
      </p>
    </div>
    <div v-else class="text-center">
      <h1 class="font-bold text-2xl">Ваша корзина пуста!</h1>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  const cartAmount = useState('cart-amount')
</script>