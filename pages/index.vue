<template>
  <TheContainer
      title="Главная страница"
      isTransparentContent
  >
    <div v-if="pending" class="flex justify-center items-center h-[100%]">
      <img src="/spinner.svg" class="animate-spin">
    </div>
    <div v-else class="p-[2px] min-[620px]:p-[10px] flex flex-col gap-3">
      <div class="flex flex-col min-[665px]:flex-row gap-3">
        <div class="min-w-[180px] hidden min-[665px]:block max-w-[180px] bg-[#fff] p-[10px] rounded-[20px]">
          <img src="/guarantee.svg" alt="Знак качества">
        </div>
        <div class="flex rounded-[20px] items-start p-[10px] bg-[#fff] w-full justify-end">
          <div class="flex flex-col">
            <div class="flex items-start gap-[10px]">
              <h2 class="font-bold text-xs min-[620px]:text-xl">Контактные данные:</h2>
              <div class="flex flex-col items-end">
                <h2 class="font-bold self-start text-xs min-[620px]:text-xl">+7(995)685-96-60</h2>
                <p class="text-xs min-[620px]:text-xl">ammunition.rf@gmail.com</p>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="block font-bold">Всегда актуальные цены</span>
              <span class="block font-bold">Прямая поставка с завода</span>
              <span class="block font-bold">Все товары в наличии, не нужно ждать пока изготовят.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-row items-center gap-[10px] w-full flex-wrap bg-[#fff] rounded-[20px] p-[10px]">
          <NuxtLink
              class="border-2 min-w-[92px] p-2 rounded-full border-[rgb(255,215,44)] cursor-pointer duration-300 hover:bg-bumblebee text-xs lg:text-base"
              v-for="link in data"
              :key="link.id"
              @click="$router.push('catalog' + link.link)"
          >
            <div class="flex items-center gap-[5px]">
              <img class="w-[20px] h-[20px]" :src="`${BACKEND_URL}/${link.image}`" alt="Logo">
              <span class="block">{{ link.name }}</span>
            </div>
          </NuxtLink>
        </div>
        <div class="rounded-[20px] p-[10px] bg-[#fff] w-full">
          <div class="flex min-[470px]:flex-row flex-col justify-between min-[470px]:items-center">
            <h1 class="text-xl font-bold">Почему именно мы?</h1>
            <div
                @click="openModal"
                class="min-[620px]:flex items-center hidden gap-2 text-white border-[2px] border-deep-green bg-deep-green duration-300 rounded-[20px] p-[6px] cursor-pointer hover:bg-white hover:text-[#000]"
            >
              <img src="/phone.svg" alt="Phone icon" width="20" height="20" />
              <span class="block">Связаться с нами</span>
            </div>
          </div>
          <article class="pt-[10px]">
            <header>
              <h2 class="font-bold">Гарантия качества</h2>
            </header>
            <section>
              <p class="text-sm">Мы являемся надежным поставщиком амуниции уже длительное время и успели зарекомендовать себя на рынке. У нас быстрая и отзывчивая техническая поддержка работающая 24/7, которая всегда вам поможет по любому вопросу.</p>
            </section>
          </article>
          <article class="pt-[10px]">
            <header>
              <h2 class="font-bold">Выгодные цены</h2>
              <section>
                <p class="text-sm">
                  Благодаря налаженной работе наших логистов в кооперации с зарекомендовавшими себя поставщиками, мы обеспечиваем нашим клиентам самые приемлемые и выгодные цены на рынке.
                </p>
              </section>
            </header>
          </article>
          <article class="my-2">
            <section>
              <p class="font-bold mt-[5px]">Оптовые продажи осуществляются от определённой суммы (200.000₽)</p>
            </section>
          </article>
          <article>
            <header class="font-bold">
              На крупные партии действует скикдка <span class="font-bold">10%</span>
            </header>
          </article>
          <article class="mb-3">
            <p>Цены указаны без НДС.</p>
            Если вам нужна цена с НДС, то она выставляется вместе со счетом
          </article>
          <article>
            <header>
              <p class="font-bold">Индивидуальный подход к каждому клиенту</p>
            </header>
            <section class="text-sm">
              <p>Если вы не нашли в нашем каталоге нужного вам товара или расцветки, мы можем изготовить или найти его</p>
            </section>
          </article>
        </div>
      </div>
      <div>
        <div class="p-[20px] w-full bg-[#fff] rounded-[15px] max-w-[1000px] min-h-[50px]">
          <TheTitle content="Популярные позиции" />
        </div>
        <div
            class="p-[20px] rounded-[20px] mt-[10px] grid grid-cols-1 bg-white min-[600px]:grid-cols-2 md:grid-cols-3 gap-[10px]"
        >
          <TheProductItem
              v-for="item in popularPositions"
              :key="item.id"
              :id="item.productId"
              :name="item.name"
              :price="`${item.price}`"
              :route="item.route"
              :old-price="item.old_price"
          >
            <img class="max-h-[200px]" :src="`${BACKEND_URL}/${item.image}`" alt="Изображение товара">
          </TheProductItem>
        </div>
      </div>
    </div>
  </TheContainer>
</template>
<script setup lang="ts">
import { ICommonModal } from "~/utils/interfaces";
import popularPositions from "~/utils/popularProducts";
const config = useRuntimeConfig()
const BACKEND_URL = config.public.backendURL

useHead({
  title: "Амуниция РФ | Рюкзаки, бронижелеты, амуниция оптом",
  meta: [
    { name: "description", content: "Амуниция РФ Рюкзаки оптом Термобелье оптом Аптечки отптом Бронижелеты оптом Щиты оптом Купить рюкзаки оптом"}
  ]
})

const openModal = () => {
  const commonModal = useState<ICommonModal>('commonModal')
  commonModal.value.isOpened = true
}

const { pending, data } = useLazyFetch(`${BACKEND_URL}/api/categories`)
</script>
