<template>
  <TheContainer title="Аптечки">
    <div v-if="pending" class="flex justify-center items-center h-[100%]">
      <img src="/spinner.svg" class="animate-spin">
    </div>
    <div v-else class="p-[20px] grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]">
      <div
          v-for="item in data"
          :key="item.id" class="flex flex-col justify-between p-[10px] border-[rgba(0,0,0,.3)] border-[3px] cursor-pointer rounded-[6px] duration-300 hover:border-bumblebee"
          @click="navigate(item.id)"
      >
        <div class="relative flex flex-col gap-[20px]">
          <div
              v-if="item.old_price"
              class="absolute top-[-5px] right-[-5px] bg-bumblebee rounded-[20px] px-[10px] py-[6px] tracking-wide text-xs font-bold uppercase"
          >
            Скидка!
          </div>
          <div class="max-w-[320px] max-h-[320px]">
            <img
                :src="`${config.public.backendURL}/${item.image}`"
                alt="Изображение товара"
                aria-label="Изображение товара"
            />
          </div>
          <div class="mt-4">
            <p class="text-m">{{ item.name }}</p>
            <div class="flex items-center gap-[4px]">
              <p class="font-bold">{{ item.price }}₽</p>
              <p v-if="item.old_price" class="line-through">{{ item.old_price }}₽</p>
            </div>
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
  import { BasketItem } from "~/utils/interfaces";

  useHead({
    title: 'Купить аптечки | Амуниция РФ',
    meta: [
      {name: 'description', content: 'Купить аптечки РФ где приобрести аптечки в россии купить набор медика купить автомобильная аптечка'}
    ]
  })

  const config = useRuntimeConfig()
  const router = useRouter()
  const { pending, data } = useLazyFetch(`${config.public.backendURL}/api/medicine`)

  setTimeout(() => console.log(data))

  const basket = useState<BasketItem[]>('basket')

  const navigate = (id: number): void => {
    router.push(`/catalog/medical-kits/${id}`)
  }
</script>
