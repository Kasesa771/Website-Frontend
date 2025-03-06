<template>
  <NuxtLayout name="default">
    <div>
      <HomePage />
      <Promo />
      <!-- <BreweryPub /> -->
      <div class="relative flex bg-[#F40035] text-white overflow-x-hidden">
        <div class="py-12 animate-marquee gap-x-6 pr-12 flex whitespace-nowrap">
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
        </div>

        <div class="absolute top-0 flex py-12 gap-x-6 items-center animate-marquee2 whitespace-nowrap">
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
          <div class="text-2xl mx-4 flex gap-x-8 uppercase font-semibold">kasesa amahitamo ya rubanda
            <img src="/assets/images/kasesa-logo-02.png" alt="logo" class="w-full rounded-3xl h-8 ">
          </div>
        </div>
      </div>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
              <div class="overflow-hidden bg-slate-100 rounded-xl aspect-w-3 aspect-h-4">
                <img class="object-contain " src="/assets/images/mainpro.png" alt="" />
              </div>

              <div class="relative">
                <div class="h-full overflow-hidden rounded-xl aspect-w-3 aspect-h-4">
                  <video ref="videoPlayer" class="w-full max-w-2xl" src="/assets/videos/sample-video.mp4" controls loop
                    playsinline autoplay @ended="closeVideo"></video>
                </div>

              </div>


            </div>

            <div class="flex flex-col items-start xl:px-16">
              <h2 class="text-3xl font-bold leading-tight text-[#F40035] sm:text-4xl lg:text-5xl">
                Our brewery proposes
              </h2>
              <p class="mt-4 text-2xl leading-relaxed text-gray-600">
                «Our brewery uses classical individual liquor technology, taking into account the desires of our
                consumers»
              </p>

              <a href="#" title=""
                class="inline-flex  items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-red-600"
                role="button">
                Get Liquor
                <svg class="w-5 h-5 ml-8  -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <DescoverBeers />
      <Articles />
      <Gallery />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
  title: " Home"
})
const showVideo = ref(false);
const videoSrc = 'assets/videos/sample-video.mp4';

const playVideo = () => {
  showVideo.value = true;
};

const closeVideo = () => {
  showVideo.value = false;
};
</script>

<style scoped>
video {
  max-height: 80vh;
}
</style>