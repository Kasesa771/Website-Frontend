<template>
  <div class="relative h-96 lg:h-[490px] w-full ">

    <div :class="[
      'absolute inset-0 w-full h-full bg-cover bg-black bg-center transition-opacity duration-1000 ease-in-out'
    ]" ></div>
    <div class="absolute mx-auto right-1 left-1 bottom-3   text-white    flex items-center justify-center flex-col  py-9 text-center space-y-4">
      <h1 class="text-5xl font-bold">{{ props.item?.title }}</h1>
      <p class="text-red-400 text-xl ">{{ props.item?.path }}</p>
    </div>
  </div>

</template>

<script lang="ts" setup>
interface Item {
  title?: string;
  path?: string;
}
 const props = defineProps<{ item?: Item }>();
 
</script>

<style>
/* Your styles here */
</style>
