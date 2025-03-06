<script setup lang="ts">
import { ref } from "vue"

const store = useProductsStore()

const products = computed(() => store.products)

onMounted(() => {
  store.getProducts()
})
 
const addToCart = (product: any) => {
  console.log(product)
}
 
</script>
<template>
  <div class="relative max-w-screen-5xl bg-white  px-4 sm:px-8 overflow-hidden">
    <div class="max-w-screen-2xl mx-auto   grid grid-cols-7 gap-x-6 ">
      <div v-for="product in products"
        class="col-span-2 lg:col-span-1 border space-y-2 cursor-pointer group hover:border-red-500 duration-300 rounded-xl flex items-center justify-center flex-col py-4 px-4 sm:px-6 my-8">
        <div class="w-[100px]">
          <img :src="product.imageUrl" class="w-full bg-transparent" draggable="false">
        </div>
        <h3 class="text-sm py-1 text-center text-black font-semibold group-hover:text-[#F40035] duration-300">{{ product.name }}</h3>
        <p class="text-xs py-1 text-center text-gray-500 font-medium group-hover:text-[#F40035] duration-300">{{ product.description }} </p>
  
      </div>
    </div>


  </div>
</template>