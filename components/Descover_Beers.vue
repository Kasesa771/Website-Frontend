<script setup lang="ts">
const store = useProductsStore()

const items = computed(() => store.products)

onMounted(() => {
  store.getProducts()
})

const addToCart = (product: any) => {
  console.log(product)
}
</script>

<template>
  <div class="bg-gray-100 text-black">
    <div class="max-w-screen-2xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
      <div class="text-center  lg:py-24 px-5">
        <h1 class="text-5xl pb-5 uppercase text-[#F40035] font-bold"><span class="font-medium text-black">featured
          </span>PRODUCTS
        </h1>
        <p class="text-xl">Join us in raising a glass to unforgettable moments and unforgettable flavors. Cheers to
          excellence, from our distillery to your glass.
        </p>
      </div>
      <UCarousel v-slot="{ item }" :items="items"
        :ui="{ item: 'basis-full hover:bg-gray-50  duration-300 rounded-xl cursor-pointer group md:basis-1/2 lg:basis-1/4' }"
        :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: 'absolute left-4 top-1/2 group hover:bg-gray-50 cursor-pointer transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
      }" :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: 'absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
      }" arrows>
        <div class="flex flex-col items-center justify-center text-center p-4">
        <div class="bg-red-600 hidden py-2 px-3 text-xs rounded-full text-white font-semibold">20% Discount</div>

          <div class="w-3/4 mx-auto">
            <img :src="item.imageUrl" class="w-full" draggable="false">
          </div>
          <h3 class="text-sm  font-medium text-yellow-500">Gin</h3>
          <h3 class="mt-0 text-2xl py-1 font-semibold group-hover:text-red-500 duration-300 transition-all">{{ item.name
            }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </UCarousel>

      <div class="flex justify-center py-5">
        <button class="bg-[#F40035] py-3 px-9 font-semibold rounded-full hover:bg-gray-300 duration-300">Read
          More</button>
      </div>
    </div>
  </div>
</template>
