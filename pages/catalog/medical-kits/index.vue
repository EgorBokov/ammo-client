<template>
  <TheContainer title="Аптечки">
    <div class="p-[20px] grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]">
      <div
          v-for="item in data"
          :key="item.id" class="flex flex-col justify-between p-[10px] border-[rgba(0,0,0,.3)] border-[3px] cursor-pointer rounded-[6px] duration-300 hover:border-bumblebee"
          @click="navigate(item.id)"
      >
        <div class="flex flex-col gap-[20px]">
          <div class="max-w-[320px] max-h-[320px]">
            <img
                :src="`${config.public.backendURL}/${item.image}`"
                alt="Изображение товара"
                aria-label="Изображение товара"
            />
          </div>
          <div class="mt-4">
            <p class="text-m">{{ item.name }}</p>
            <p class="font-bold">{{ item.price }}₽</p>
          </div>
        </div>
        <button
            class="border-[2px] border-[#000] rounded-[4px] hover:bg-[rgba(0,0,0,.2)] py-[6px] duration-300 hover:bg-[#fff]"
        >
          В корзину
        </button>
      </div>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const router = useRouter()
  const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/medicine`)

  const basket = useState('basket')

  const navigate = (id: number): void => {
    router.push(`/catalog/medical-kits/${id}`)
  }
</script>
