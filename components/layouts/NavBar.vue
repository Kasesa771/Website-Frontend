<template>
  <div
    :class="['fixed top-0 left-0 w-full  z-20 transition-all  bg-black duration-500', { ' transition-all shadow-xl duration-300 ease-in-out bg-black': hasShadow }, { ' transition-opacity duration-1000 ease-in-out bg-black': dropdownNavbar && !hasShadow }]">
    <div class="flex flex-col max-sm:space-y-5 bg-[#F40035] lg:flex-row justify-around items-center py-4">
      <div class="flex items-center gap-5" :class="[{ 'text-white': !hasShadow }]">
        <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white duration-300" width="24" height="24"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z" />
          </svg>

        </div>
        <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white duration-300" width="24" height="24"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999" />
          </svg>

        </div>
        <div class="  border-white p-2 flex rounded-full group cursor-pointer duration-300 hover:bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white duration-300" width="24" height="24"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M20.947 8.305a6.5 6.5 0 0 0-.419-2.216a4.6 4.6 0 0 0-2.633-2.633a6.6 6.6 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.6 6.6 0 0 0-2.185.42a4.6 4.6 0 0 0-2.633 2.633a6.6 6.6 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.6 6.6 0 0 0 2.186-.419a4.62 4.62 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078" />
            <circle cx="11.994" cy="11.979" r="3.003" fill="currentColor" />
          </svg>

        </div>
      </div>
      <div class="w-[70px]">

        <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl">
      </div>
      <div class="flex items-center gap-x-5">
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">

          <div @click="
            toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')
            " class="  space-x-2 items-center px-2 rounded-lg hidden  cursor-pointer">
            <div class="mt-2 text-gray-700  cursor-pointer ">
              <UIcon class="h-5 w-5" v-if="$colorMode.preference === 'light'" name="i-heroicons-moon-16-solid" />
              <UIcon class="h-5 w-5" v-else name="i-heroicons-sun-solid" />
            </div>
            <div class="font-medium text-sm ">{{ $colorMode.preference === 'light' ? 'Dark' :
              'Light'}}</div>
          </div>
          <nuxt-link to="/auth/login"
            class="flex align-center gap-1 
             hover:text-[#F40035] text-white hover:bg-white  duration-200 ease-out  rounded-lg px-6 py-2 bg-[#F40035] ">
            Login
          </nuxt-link>
        </div>
        <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
          <UIcon name="i-heroicons-bars-3" class="text-slate-700 " v-if="!open" :size="24" />
          <UIcon name="i-heroicons-x-mark" class="text-slate-700 " v-else :size="24" />
        </button>
      </div>
    </div>
    <nav>
      <div
        class="flex flex-col max-w-screen-2xl   px-8 mx-auto lg:items-center lg:justify-center  rounded-2xl lg:flex-row"
        :class="[' bg-black bg-opacity-20  transition-opacity duration-1000 ease-in-out backdrop-blur-lg' ]">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8 ">

          <ul :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex  items-center flex-col flex-grow uppercase xl:gap-x-16 mt-2 lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-4 space-y-4 lg:space-y-0">
            <LayoutsOthersNavLink v-for="(menu, index) in linkItems" :class="[{
              'text-white':
                !hasShadow
            }]" @click="menu.isDropdown ? dropdownToggler(menu.id) : chooseMenu(menu.id)" :name="menu.link"
              :url="menu.url" :id="menu.id" :selectedId="selected" :isDrop="menu.isDropdown" />
          </ul>
        </div>


      </div>
      <div v-if="dropdownNavbar" class="w-full shadow-xl">
        <LayoutsDropdownProduct v-if="selected == 2" />

      </div>

    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

 

const colorMode = useColorMode()
console.log(colorMode.preference)
const open = ref(false)
let selected = ref(1)

const dropdownNavbar = ref(false)
if (process.client) {
  let activeTab = localStorage.getItem("navemenu-active");
  selected.value = activeTab;
  console.log(selected)
}
function dropdownToggler(tab: any) {
  dropdownNavbar.value = !dropdownNavbar.value
  selected.value = tab
  open.value = false
}

function toggleDarkMode(theme: any) {
  useColorMode().preference = theme
}

function chooseMenu(tab: any) {
  selected.value = tab
  dropdownNavbar.value = false
  localStorage.setItem("navemenu-active", tab);

}


const openDropdown = ref<number | null>(null);
const isOpen = ref(false);

const toggleDropdown = (index: number) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const linkItems = [
  {
    link: "Home",
    url: '/',
    id: 1,
    isDropdown: false

  },
  {
    link: "Products",
    url: '#',
    id: 2,
    isDropdown: true

  },
  

  {
    link: "Services",
    url: '/services',
    id: 5,
    isDropdown: false

  },
  {
    link: "About Us",
    url: '/about-us',
    id: 4,
    isDropdown: false

  },
  {
    link: "Teams",
    url: '/team',
    id: 8,
    isDropdown: false

  },
  {
    link: "Contacts Us",
    url: '/contact-us',
    id: 3,
    isDropdown: false
  },
];

const hasShadow = ref<boolean>(false); // Declare reactive variable with type

const handleScroll = (): void => {
  hasShadow.value = window.scrollY > 0; // Update shadow state based on scroll position
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Add event listener on mount
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll); // Remove event listener on unmount
});
</script>

<style scoped></style>
