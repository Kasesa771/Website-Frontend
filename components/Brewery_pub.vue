<template>
  <div class="bg-gray-200 text-black">
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div class="">
            <h2 class="text-5xl flex flex-col text-[#F40035] font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span class="lg:text-5xl">Our brewery proposes</span>
            </h2>
            <h3 class="py-5 text-2xl font-bold">«Our brewery uses <span class="text-red-400">classical individual</span>
              beer technology, taking into account the desires of our consumers»</h3>
            <p class="mt-4 text-base leading-relaxed">
              Nam aliquet tincidunt ante, ac tempus quam faucibus vel. Cras volutpat interdum mi at sodales. Morbi
              posuere, magna at finibus feugiat, ex ipsumante
            </p>
            <div class="py-5">
              <button
                class="bg-[#F40035] font-bold px-14 py-4 rounded-full hover:border-2 duration-200 hover:bg-transparent hover:border-red-500">Get
                Beer</button>
            </div>
          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full mt-4 mb-10 ml-auto">
              <img class="" src="http://weisber.like-themes.com/wp-content/uploads/2019/04/home-2-offer.png" alt="" />
            </div>
          </div>
        </div>
        <div class="grid text-center grid-cols-4 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div v-for="item in items" :key="item.id"
            class="bg-white flex flex-col py-9 rounded-xl group  cursor-pointer items-center">
            <div
              class="w-[120px] h-[120px] bg-gray-200 group-hover:w-[130px] group-hover:h-[130px] duration-300 transition-all p-5 rounded-full">
              <img :src="item.image" alt="" class="w-full h-full object-contain">
            </div>
            <div class="px-4">
              <div>
                <h1 class="font-bold text-xl py-3 group-hover:text-[#F40035] text-black">{{ item.title }}</h1>
                <p class="text-gray-600 text-xs">{{ item.description }}</p>
              </div>

            </div>
            <div class="pt-5 duration-100">
              <div to="/"
                class="bg-gray-200 text-black group-hover:bg-[#F40035] duration-100 transition-all group-hover:text-white hover:text-white py-3 px-7 rounded-full font-bold">
                Read more</div>
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
    title: "Draft Beers",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nesciunt voluptatibus labore enim vitae.",
    image: "http://weisber.like-themes.com/wp-content/uploads/2019/04/product-cat-1.png",
  },
  {
    id: 2,
    title: "Bottles Beers",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nesciunt voluptatibus labore enim vitae.",
    image: "http://weisber.like-themes.com/wp-content/uploads/2019/04/product-cat-2.png",
  },
  {
    id: 3,
    title: "20 Beers Kegs",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nesciunt voluptatibus labore enim vitae.",
    image: "http://weisber.like-themes.com/wp-content/uploads/2019/04/product-cat-3.png",
  },
  {
    id: 4,
    title: "Beers Cans",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nesciunt voluptatibus labore enim vitae.",
    image: "http://weisber.like-themes.com/wp-content/uploads/2019/04/product-cat-4.png",
  },
]
</script>

<style></style>