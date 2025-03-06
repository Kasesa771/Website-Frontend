<script setup lang="ts">
const store = useGalleryStore()
const mainStore = useMainStore()

const galleryitems = computed(() => store.gallery.slice().sort((a: any, b: any) => b.id - a.id))
const loading = computed(() => store.loading)

onMounted(() => {
  store.getGallery()
})
</script>

<template>
  <div>
    <UCarousel v-slot="{ item }" :items="galleryitems" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/5' }">
      <div class="relative w-full h-96"> <!-- Adjust height as needed -->
        <img :src="item.imageUrl" class="absolute top-0 left-0 w-full h-full object-cover" draggable="false" />
      </div>
    </UCarousel>
  </div>
</template>

<style scoped>
/* Add any custom styles if necessary */
</style>
