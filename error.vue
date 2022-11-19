<template>
  <NuxtLayout>
    <div class="error">
      <div class="error__image-wrapper">
        <div class="error__image-border">
          <div class="error__image-container">
            <img src="./assets/error.svg" alt="Error Page">
          </div>
        </div>
      </div>
      <div class="text">
        <p>Произошлая непредвиденная ошибка! </p>
        <p>Пожалуйста, повторите попытку</p>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object
})

console.log(props)

const handleError = () => clearError({ redirect: '/'})
</script>
<style lang="scss">
  .error {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding: 30px;

    &__image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__image-border {
      padding: 10px;
      border-radius: 100px;
      border: 3px solid #dd4333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__image-container {
      width: 80px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      background-color: #dd4333;
    }

    .text {
      text-align: center;
      p:first-child {
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 5px;
      }
    }
  }
</style>