<template>
  <div class="bg-white">
    <div class="bg-gray-800 text-white py-10">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div>
          <h6 class="text-[#f40035] text-sm font-semibold">DEAL OF THE MONTH</h6>
          <h2 class="text-3xl font-bold">SPECIAL COLLECTION AT A <span class="text-[#f40035]">SPECIAL PRICE</span></h2>
        </div>

        <!-- Countdown Timer Component -->
       <DashboardCountdownTimer />

        <div>
          <button
            class="px-6 py-3 border border-[#f40035] text-[#f40035] hover:bg-[#f40035] hover:text-gray-800 transition">
            EXPLORE PRODUCTS
          </button>
        </div>
      </div>
    </div>
    <section class="py-10 sm:py-8 lg:py-12">
      <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="text-center py-7 lg:py-12 px-5">
          <h1 class="text-5xl pb-5 uppercase text-[#F40035] font-bold"><span class="font-medium text-black">why shop at
            </span>KASESA DISTILLERS & DISTRIBUTORS LTD
          </h1>
          <p class="text-xl">We are dedicated to producing Liquors of the highest quality, using only the finest
            ingredients and adhering to rigorous production standards.
          </p>
        </div>
        <div class="grid justify-between items-center grid-cols-1 gap-y-6 lg:py-2 md:grid-cols-3 md:gap-x-20">
          <div class="">
            <div v-for="item in items" :key="item.id" class="py-5">

              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                <span class=" text-3xl text-black">{{ item.title }}</span>
              </h2>
              <p class="mt-4 text-lg text-start leading-relaxed text-gray-600">
                {{ item.description }}
              </p>
            </div>



          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img class="ml-auto" src="/assets/images/kasads.png" alt="" />

            </div>
          </div>
          <div>
            <div v-for="item in itimesx" :key="item.id" class="py-5">
              <h2 class="text-3xl font-bold leading-tight text-end text-black sm:text-4xl lg:text-5xl">
                <span class=" text-3xl">{{ item.title }}</span>
              </h2>
              <p class="mt-4 text-lg text-end leading-relaxed text-gray-600">
                {{ item.description }}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>



const items = [
  {
    id: 1,
    title: "Wildest range",
    description: "Explore Rwanda’s broadest alcohol selection, variety for every taste."
  },
  {
    id: 2,
    title: "Best price",
    description: "Find your favourite drinks at unmatched prices."
  },
   

]

const itimesx = [
  {
    id: 1,
    title: "Expert advice",
    description: "Need help? Our industry experts are here to guide your selection."
  },
  {
    id: 2,
    title: "1st class service",
    description: "Enjoy a premium shopping experience, your satisfaction is our priority."
  },
  
]
</script>

<style></style>