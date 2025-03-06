<template>
  <template>
    <div>

      <section class="relative h-lvh flex items-center justify-center text-white text-center">
        <!-- Background Slideshow with Text Content -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div v-for="(slide, index) in slides" :key="index" :class="[
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out',
            { 'opacity-100 bg-black': currentSlideIndex === index, 'opacity-0': currentSlideIndex !== index },
          ]">
            <img :src="slide.image" class="w-full h-full object-cover" alt="Slideshow Image" />
          </div>
        </div>

        <!-- Text Overlay for each slide -->
        <div class="relative z-10 bg-black w-full  h-full px-auto bg-opacity-40 p-6 ">
          <div class=" h-full   lg:absolute md:right-32 md:left-32   xl:right-40 xl:left-40 flex flex-col justify-center text-left duration-300 p-12">
            <div
              class=" lg:w-1/2 lg:px-12 lg:pt-20 absolute right-10 left-10 flex flex-col transition-all duration-300 justify-center items-start gap-2">
              <div class="lg:text-8xl md:text-5xl sm:text-3xl max-sm:text-xl flex  duration-300 text-primary justify-end font-bold">{{
                slides[currentSlideIndex].title }}
              </div>
              <p class="mt-4 text-5xl max-sm:text-xl ">{{ slides[currentSlideIndex].description }}</p>

              <UButton size="lg" class="flex mt-5 w-32 text-center px-6">Read More</UButton>
            </div>

          </div>
          <div class="absolute bottom-20 right-5 z-10 flex flex-col  items-end space-y-4">
            <div class="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-20 h-20">
              <img src="/assets/icons/under-18-forbidden.jpg" alt="18+ Only"
                class="w-full  h-full object-cover rounded-full" />
            </div>
            <div class="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-20 h-20">
              <img src="/assets/icons/no-pregnant-women-allowed.jpg" alt="No Pregnant Women"
                class="w-full  h-full object-cover rounded-full" />
            </div>
            <div class="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-20 h-20">
              <img src="/assets/icons/ambieant.jpg" alt="No Cooling Place"
                class="w-full  h-full object-cover rounded-full" />
            </div>
            <div class="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-20 h-20">
              <img src="/assets/icons/not-drink-drive.jpg" alt="Don't Drink and Drive"
                class="w-full  h-full object-cover rounded-full" />
            </div>

          </div>
        </div>
      </section>
    </div>
  </template>

</template>

 
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    // Define slides array with image paths and text content for each slide
    const slides = ref([
      {
        image: "https://firebasestorage.googleapis.com/v0/b/taxi-9ba47.appspot.com/o/uploads%2Fback-two.png-1732811805330?alt=media&token=3816b81e-e6fe-4a4b-8be3-e0cd39aaae9b",
        title: 'KASESA DISTILLERS & DISTRIBUTORS LTD',
        description: "The People's Choice"
       },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/taxi-9ba47.appspot.com/o/uploads%2Fback-one.png-1732811908255?alt=media&token=11490401-5878-4ad5-8eca-1b597cc1bff5",
        title: 'KASESA DISTILLERS & DISTRIBUTORS LTD',
        description: "The People's Choice"
       },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/taxi-9ba47.appspot.com/o/uploads%2Fbackss.png-1732812020720?alt=media&token=b81b3da3-44a4-4b2f-9b83-b07e39dc2ba4",
        title: 'KASESA DISTILLERS & DISTRIBUTORS LTD',
        description: "The People's Choice"
       },
    ]);

    const currentSlideIndex = ref<number>(0);
    
    // Start the slideshow
    const startSlideShow = () => {
      setInterval(() => {
        currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
      }, 8000);
    };

 

    onMounted(() => {
      startSlideShow();
      // Fetch categories and services data when the component mounts
      
    });

    return {
      slides,
      currentSlideIndex,
     
    };
  },
});
</script>
<style></style>