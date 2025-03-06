<script setup lang="ts">
import { ref } from "vue"
import NavLink from '@/components/layouts/others/NavLink.vue';
import NavLinkFooter from '@/components/layouts/others/NavLinkFooter.vue';
const currentDate = new Date();
const colorMode = useColorMode()
console.log(colorMode.preference)

const footerMenu = ref([
  {
    id: "1",
    title: "Products",
    menuLinks: [
      { title: 'Kasesa Pure Waragi,', url: '/products' },
      { title: 'Origin Pure Waragi', url: '/products' },
      { title: 'African Gin', url: '/products' },
      { title: 'Professor Waragi', url: '/products' },
      { title: 'Star Waragi', url: '/products' },
      { title:'Cabinet Coconut', url:'/products'},
    ]
  },
  {
    id: "2",
    title: "Company",
    menuLinks: [
      { title: 'About Us', url: '/about-us' },
      { title: 'Our Mission', url: '/about-us' },
      { title: 'Our Vision', url: '/about-us' },
      { title: 'Our Core Values', url: '/about-us' },
      { title: 'Contact Us', url: '/contact-us' },
      { title: 'Team', url: '/team' },
    ]
  },
  {
    id: "1",
    title: "Core Values",
    menuLinks: [
      { title: 'Quality', url: '/about-us' },
      { title: 'Innovation', url: '/about-us' },
      { title: 'Integrity', url: '/about-us' },
      { title: 'Customer Focus', url: '/about-us' },
      { title: 'Community Engagement', url: '/about-us' },
    ]
  }
])

</script>
<template>
  <footer class="relative bg-[#F40035] text-white ">
    <div class="max-w-screen-2xl  px-4 py-16 mx-auto sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="w-[100px]">
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl">
          </div>
          <!-- <img src="~/assets/images/loading.png" class="mr-5 h-10  sm:h-9" alt="Kasesa Logo" /> -->
          <p class="max-w-sm mt-5 text-sm font-medium justify-between flex   dark:text-muted">
            Discover the essence of exceptional craftsmanship and unparalleled quality with Kasesa Distillers &
            Distributors Ltd. Join us in raising a glass to unforgettable moments and unforgettable flavors. Cheers to
            excellence, from our distillery to your glass.

          </p>
          <div class="  mt-8 space-x-6  dark:text-muted">
            <div class="flex items-center gap-5">
              <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-slate-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-black duration-300" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z" />
                </svg>

              </div>
              <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-slate-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-black duration-300" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999" />
                </svg>

              </div>
              <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-slate-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-black duration-300" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20.947 8.305a6.5 6.5 0 0 0-.419-2.216a4.6 4.6 0 0 0-2.633-2.633a6.6 6.6 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.6 6.6 0 0 0-2.185.42a4.6 4.6 0 0 0-2.633 2.633a6.6 6.6 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.6 6.6 0 0 0 2.186-.419a4.62 4.62 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078" />
                  <circle cx="11.994" cy="11.979" r="3.003" fill="currentColor" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(menu, i) in footerMenu">
            <p class="font-medium text-white text-3xl">
              {{ menu.title }}
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm  dark:text-muted">
              <NavLinkFooter v-for="(link, index) in menu.menuLinks" :key="index" :name="link.title" :url="link.url" />


            </nav>
          </div>


        </div>
      </div>
      <p class="mt-8 text-xs dark:text-muted">
        © Copyright 2013 - {{ currentDate.getFullYear() }}
      </p>
    </div>
  </footer>
</template>