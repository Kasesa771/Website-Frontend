<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-end justify-between">
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-5xl pb-5 uppercase text-[#F40035] font-bold"><span class="font-medium text-black">OUR
            </span>Blog & Events
          </h1>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Join us in raising a glass to
            unforgettable moments and unforgettable flavors. Cheers to excellence, from our distillery to your glass.

          </p>
        </div>

        <div class="hidden lg:flex lg:items-center lg:space-x-3">
          <button type="button"
            class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button type="button"
            class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
        <div v-for="item in articles" class="overflow-hidden bg-white rounded shadow">
          <div class="p-5">
            <div class="relative">
              <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                <img class="object-cover w-full h-full"
                  :src="item.image" alt="" />
              </a>

              <div class="absolute top-4 left-4">
                <span
                  class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                  {{ item.subtitle }} </span>
              </div>
            </div>
            <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {{  formatDateStandard(item.createdAt) }}
            </span>
            <p class="mt-5 text-2xl font-semibold">
              <a href="#" title="" class="text-black"> {{ item.title}} </a>
            </p>
            <p class="mt-4 text-base text-gray-600">{{ item.description}}</p>
            <a href="#" title=""
              class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-red-600 transition-all duration-200 border-b-2 border-transparent hover:border-red-600 focus:border-red-600">
              Continue Reading
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        
      </div>

      <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
        <button type="button"
          class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button type="button"
          class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const store = useBlogsStore()
const mainStore = useMainStore()
const { formatDateStandard } = useDateFormatter()
const articles = computed(() => { return store.blogs })
const loading = computed(() => store.loading)
onMounted(() => {
  store.getBlogs()
})

 
</script>

<style></style>