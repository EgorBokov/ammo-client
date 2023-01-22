<template>
  <div
      @click="closeModal"
      class="absolute z-10 top-0 left-0 w-full h-full flex items-center bg-modal-shadow justify-center"
  >
    <div @click.stop class="flex flex-col justify-between w-[500px] bg-white z-20 rounded-[20px] p-[10px] duration-300">
      <div>
        <div class="w-full flex items-center justify-between">
          <TheTitle content="Связаться с нами" />
          <div
              @click="closeModal"
              class="hover:bg-light-gray rounded-full flex items-center justify-center duration-300 w-[20px] h-[20px] cursor-pointer"
          >
            ×
          </div>
        </div>
        <div
            v-if="isFormSent"
            class="pt-[10px] text-center"
        >
          <h2 class="font-bold text-lg">Заяка отправлена!</h2>
          <div>
            Спасибо за оставленную заявку, в ближайшее время наш менеджер свяжется с Вами!
          </div>
        </div>
        <div v-if="!isFormSent" class="pt-[10px] w-full">
          <p class="font-bold">Оставьте свои контактные данные и мы вам перезвоним!</p>
          <form class="w-full pt-[10px]">
            <div class="flex flex-col items-center gap-3">
              <input
                  v-model="name"
                  class="rounded-[10px] p-[5px] border-2 border-bumblebee w-[250px]"
                  type="text"
                  id="name"
                  placeholder="Ваше имя"
              />
              <input
                v-model="phone"
                class="rounded-[10px] p-[5px] border-2 border-bumblebee w-[250px]"
                type="text"
                id="name"
                placeholder="Ваш номер телефона"
              />
            </div>
          </form>
          <div
              @click="sentFormToEmail"
              class="w-full text-center rounded-[20px] bg-bumblebee p-[10px] mt-[10px] cursor-pointer border-bumblebee border-[2px] duration-300 hover:bg-white"
          >
            Запросить звонок
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICommonModal } from "~/utils/interfaces";

const config = useRuntimeConfig()

const isFormSent = ref<boolean>(false)

const sentFormToEmail = async () => {
  if (name.value && phone.value) {
    try {
      await $fetch(`${config.public.backendURL}/api/callback`, {
        method: 'POST',
        body: {
          phone: phone.value,
          name: name.value
        }
      })

      isFormSent.value = true
    } catch(e) {
      console.log('Sending callback request', e)
    }
  }
}

const commonModal = useState<ICommonModal>('commonModal')

const name = ref('')
const phone = ref('')

onUnmounted(() => isFormSent.value = false)

const closeModal = () => {
  isFormSent.value = true
  commonModal.value.isOpened = false
  console.log(commonModal.value.isOpened)
}
</script>
