<template>
  <li :class="id == selectedId ? 'font-medium text-[#F40035]' : ''" class="w-full group font-medium ">

    <nuxt-link class="xl:px-4  cursor-pointer bg-transparent   dark:hover:text-[#F40035]" :to="url">
      <div class="flex w-auto gap-2">
        <div class="text-nowrap text-white">{{ name }}</div>
        <div v-if="isDrop">
          <UIcon name="i-heroicons-chevron-down" class="text-bold text-white" v-if="isDrop" :size="20" />
        </div>
      </div>


      <div :class="id == selectedId ? 'scale-x-100' : ''"
        class="h-0.5 w-auto mt-1 bg-gradient-to-br from-[#F40035] to-red-900 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-200 ease-out">
      </div>
    </nuxt-link>


  </li>
</template>
<script setup lang="ts">

const props = defineProps({
  id: Number,
  selectedId: Number,
  name: String,
  url: String,
  isDrop: Boolean,
});

</script>