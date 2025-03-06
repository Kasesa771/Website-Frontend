<template>
  <div class="min-h-screen relative bg-white">
    <!-- Top Section with Black Background -->
    <header class="absolute mx-auto left-0 right-0 bg-gray-900">
      <UContainer class="text-white py-4 px-6 flex items-center justify-between">
        <div class="flex space-x-4 items-center">
          <div class="w-[50px]">

            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl">
          </div>
          <div class="text-2xl text-primary-600 uppercase font-bold">Admin Portal
          </div>
        </div>


        <div class="flex items-center space-x-4">
          <input type="text" placeholder="Search anything..."
            class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full" />
          <ClientOnly>
            <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
              variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
            <template #fallback>
              <div class="w-8 h-8" />
            </template>
          </ClientOnly>
          <div class="flex items-center space-x-2">
            <img src="https://avatar.iran.liara.run/public" alt="Profile" class="w-8 h-8 rounded-full" />
          </div>

          <UButton icon="i-heroicons-arrow-right-start-on-rectangle" variant="outline" label="Logout"
            @click="authStore.logout()" />
        </div>
      </UContainer>
      <UContainer class="flex items-center justify-between py-12">
        <div>

          <section class="py-6 text-white">
            <div class=" ">
              <h1 class="text-4xl font-bold ">Hi 👋 {{ user.firstName + " "+ user.lastName}}</h1>
              <p class="text-xl uppercase text-primary-700 pt-2">{{ user.role }}</p>
            </div>
          </section>

        </div>

        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8 ">

          <ul :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex  items-center flex-col  dark:text-muted flex-grow   xl:gap-x-8 text-sm mt-2 lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-4 space-y-4 lg:space-y-0">
            <LayoutsOthersNavLink v-for="(menu, index) in linkItems" :class="[{
              'text-white':
                !hasShadow
            }]" @click="chooseMenu(menu.id)" :name="menu.link" :url="menu.url" :id="menu.id" :selectedId="selected"
              :isDrop="menu.isDropdown" />
          </ul>
        </div>

      </UContainer>

    </header>


    <!-- Main Content Container -->

    <UContainer
      class="flex absolute right-0 left-0 top-60   rounded-t-3xl border-t-4 border-primary items-center py-12 bg-white   justify-center ">
      <slot />
    </UContainer>

  </div>
</template>

<script lang="ts" setup>
const open = ref(false)
const authStore = useAuthStore();
let selected = ref(1)
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const user = computed(() => authStore.user);

function chooseMenu(tab: any) {
  selected.value = tab
  localStorage.setItem("navemenu-active", tab);

}
const linkItems = [
  {
    link: "Dashboard",
    url: '/dashboard',
    id: 1,
    isDropdown: false

  },
  {
    link: "Products",
    url: '/dashboard/products',
    id: 2,
    isDropdown: false

  },

  {
    link: "Teams",
    url: '/dashboard/teams',
    id: 5,
    isDropdown: false

  },

  {
    link: "Gallery",
    url: '/dashboard/gallery',
    id: 3,
    isDropdown: false
  },
  {
    link: "News & Events",
    url: '/dashboard/blogs',
    id: 7,
    isDropdown: false
  },
];

const hasShadow = ref<boolean>(false); 
</script>

<style></style>