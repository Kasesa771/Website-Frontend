<template>
  <div>
    <Header :item="mainTitle[0]" />

    <div class="flex  gap-9 p-6 max-w-7xl mx-auto sm:px-6 lg:px-8">

      <div class="py-7 bg-[#262022] text-white w-full md:w-[30%]">
        <div class="px-6 mb-6">
          <UInput icon="i-heroicons-magnifying-glass-20-solid" size="lg" color="white" :trailing="false"
            placeholder="Search Products..." />
        </div>

        <div class="py-6">
          <h1 class="text-center font-bold text-xl">CARTS</h1>
          <p class="text-center">No Products</p>
        </div>

        <div>
          <h1 class="text-center font-bold text-xl">CATEGORIES</h1>
          <div v-for="item in category" :key="item.id" class="py-4">
            <span class="ml-10 font-semibold">{{ item.category }}</span>
          </div>
        </div>

        <div class="m-10">
          <h2 class="text-center font-bold text-xl">PRODUCT TAGS</h2>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink class="font-bold cursor-pointer hover:text-[#F40035]">#Crafts</NuxtLink>
            <NuxtLink class="font-bold cursor-pointer hover:text-[#F40035]">#Flights</NuxtLink>
            <NuxtLink class="font-bold cursor-pointer hover:text-[#F40035]">#Hop</NuxtLink>
            <NuxtLink class="font-bold cursor-pointer hover:text-[#F40035]">#Wheat</NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-full md:w-[70%]">
        <div class="space-y-5 mb-6">
          <p>Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque.</p>
          <div class=" w-full bg-red-50 p-5 flex justify-between items-center">
            <h2 class="w-full text-gray-600 font-semibold"> Showing 1–6 of 11 results</h2>
            <USelect placeholder="default sorting" class="w-1/2" :options="['United States', 'Canada', 'Mexico']" />
          </div>

        </div>
        <div class="grid gap-5 p-4 grid-cols-1 sm:grid-cols-2">
          <div v-for="item in paginatedProducts" :key="item.id" class="w-full">
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <div class="w-[150px]">
                <img :src="item.src" class="w-full rounded" draggable="false" />
              </div>
              <h3 class="mt-2 text-2xl py-3 font-semibold">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
              <span class="font-bold">${{ item.price }}</span>
              <div class="pt-5">
                <button class="bg-[#F40035] py-3 px-9 font-semibold rounded-full hover:bg-gray-300 duration-300">Add
                  Cart</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div v-if="Products.length > productsPerPage" class="flex justify-between mt-5">
          <UButton @click="prevPage" :disabled="currentPage === 1" icon="i-heroicons-arrow-long-left" />
          <UButton @click="nextPage" :disabled="currentPage * productsPerPage >= Products.length"
            icon="i-heroicons-arrow-long-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const product = [
  { id: 1, name: "Product 1", description: "Product Description 1", price: "$9.99" },
  { id: 2, name: "Product 2", description: "Product Description 2", price: "$19.99" },
  { id: 3, name: "Product 3", description: "Product Description 3", price: "$29.99" },
];

const category = [
  { id: 1, category: "Classic beer" },
  { id: 2, category: "Craft beer" },
  { id: 3, category: "Draft beer" },
  { id: 4, category: "20 liter kegs" },
  { id: 5, category: "Beer cans" },
  { id: 6, category: "Bottled beer" },
];
const mainTitle = [
  {
    title: "Bottled beer",
    path: "home / Products / Bottled beer"
  }
];

const Products = [
  { id: 1, price: "400", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_08-360x1320.png', title: 'Irish Stout', description: 'ABV 6,5% | IBU 60 | OG 1.104' },
  { id: 2, price: "500", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_03-360x1320.png', title: 'Golden Beer', description: 'ABV 5,5% | IBU 70 | OG 1.104' },
  { id: 3, price: "300", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_04-360x1320.png', title: 'England Knights', description: 'ABV 6,5% | IBU 60 | OG 1.104' },
  { id: 4, price: "200", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_05-360x1320.png', title: 'Good Old Days', description: 'ABV 8,5% | IBU 60 | OG 1.104' },
  { id: 5, price: "600", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/classic_01-360x1320.png', title: 'Weis Beers', description: 'ABV 6,0% | IBU 90 | OG 1.104' },
  { id: 6, price: "100", src: 'http://weisber.like-themes.com/wp-content/uploads/2018/02/bottle_02-360x1277.png', title: 'Golden Beer', description: 'ABV 6,8% | IBU 50 | OG 1.104' },
];

const productsPerPage = 2;
const currentPage = ref(1);
const sortOption = ref("default");

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage;
  const sortedProducts = sortOption.value === "title"
    ? [...Products].sort((a, b) => a.title.localeCompare(b.title))
    : Products;
  return sortedProducts.slice(start, start + productsPerPage);
});

const nextPage = () => {
  if (currentPage.value * productsPerPage < Products.length) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const sortProducts = () => {
  currentPage.value = 1;
};
</script>

<style scoped>
/* Add your responsive styles if needed */
</style>
