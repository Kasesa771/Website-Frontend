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
  <div>
    <section class="py-10 bg-white sm:py-16 lg:py-24"></section>


    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-6xl font-bold  text-primary  uppercase sm:text-6xl">Kasesa Distillers & Distributors Products</h2>
        </div>

        <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-4 gap-x-6">
          <div v-for="product in products" class="md:px-4 lg:px-10">
            <img class="-rotate-1" :src="product.imageUrl" alt="" />
            <h3 class="mt-8 text-xl text-center font-semibold leading-tight text-black">{{ product.name}}</h3>
            <p class="mt-4 text-base text-center text-gray-600">{{ product.price}} RWF</p>
          </div>

        </div>
      </div>
    </section>



  </div>
</template>