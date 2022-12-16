<template>
  <div
      @click="closeModal"
      class="absolute z-10 top-0 left-0 w-full h-full flex items-center bg-modal-shadow justify-center"
  >
    <div @click.stop class="flex flex-col justify-between w-[500px] bg-white z-20 rounded-[20px] p-[10px] duration-300">
      <div>
        <div class="w-full flex items-center justify-between">
          <TheTitle content="Оформление заказа" />
          <div
              @click="closeModal"
              class="hover:bg-light-gray rounded-full flex items-center justify-center duration-300 w-[20px] h-[20px] cursor-pointer"
          >
            ×
          </div>
        </div>
        <div class="pt-[10px] w-full">
          <form class="flex flex-col gap-3 w-full">
            <div class="flex justify-between items-center">
              <label for="name">Ваше имя:</label>
              <input
                  v-model="name"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee"
                  type="text"
                  id="name"
                  placeholder="Ваше имя"
              />
            </div>
            <div class="flex justify-between items-center">
              <label for="phone">Номер телефона</label>
              <input
                  v-model="phone"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee"
                  type="text"
                  id="phone"
                  placeholder="+7 (999) 999-99-99"
              />
            </div>
            <div class="flex justify-between items-center">
              <label for="email">Электронная почта:</label>
              <input
                  v-model="email"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee"
                  type="text"
                  id="email"
                  placeholder="email@mailbox.ru"
              />
            </div>
            <div class="flex justify-between items-center">
              <label for="country">Страна:</label>
              <input
                  v-model="country"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee"
                  type="text"
                  id="country"
                  placeholder="Страна доставки"
              />
            </div>
            <div class="flex justify-between items-center">
              <label for="city">Город:</label>
              <input
                  v-model="city"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee"
                  type="text"
                  id="city"
                  placeholder="Город доставки"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="mt-[20px]">
        <button
            @click="createPurchase"
            class="flex items-center justify-center py-[10px] w-full border-2 border-bumblebee rounded-[10px] bg-bumblebee hover:bg-white hover:border-[#000] duration-300 self-end justify-self-end"
        >
          Подтвердить
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {IModalWindow} from "~/utils/interfaces";

  const config = useRuntimeConfig()
  const modal = useState<IModalWindow>('modalWindow')
  const notification = useState('isItemAdded')

  const name = ref<string>('')
  const email = ref<string>('')
  const phone = ref<number | null>(null)
  const country = ref<string>('')
  const city = ref<string>('')

  const closeModal = () => {
    modal.value.isOpened = false
    modal.value.name = ''
  }

  const createPurchase = async () => {
    const basket = useState('basket')

    const response = await $fetch(`${config.public.backendURL}/api/create-order`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        country: country.value,
        city: city.value,
        order: basket.value
      }
    })
    const showNotification = () => {
      modal.value.name = ''
      modal.value.isOpened = false
      notification.value.title = 'Заказ успешно оформлен!'
      notification.value.isOpened = true
      setTimeout(() => {
        notification.value.title = ''
        notification.value.isOpened = false
      }, 3000)
    }
    basket.value = []
    showNotification()
  }
</script>
