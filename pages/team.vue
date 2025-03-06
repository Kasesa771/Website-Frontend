<template>
  <div>
    <section class="py-10 bg-white sm:py-16 lg:py-24"></section>

    <section class="py-10 relative bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-7xl   mx-auto text-center">
          <h2 class="text-5xl font-bold leading-tight text-red-600 sm:text-4xl lg:text-5xl">Meet the Team</h2>
          <p class="  mx-auto mt-4 text-base leading-relaxed text-gray-600">At Kasesa Distillers & Distributors
            Ltd (KDDL), our team is the heart and soul of our operations. Comprised of passionate individuals with
            expertise in distillation, blending, bottling, sales, marketing, and customer service who share a dedication
            to excellence, our team embodies the values of quality, innovation, integrity, and customer focus that
            define our company culture. From our Managing Director and other senior staff to our junior staff, each
            member of the KDDL team plays a vital role in delivering exceptional products and services to our clients.
          </p>
        </div>

        <div class="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-5 gap-x-4">
         
            <div v-for="(team, index) in teams" :key="index"  class="group cursor-pointer">
              <img class="object-cover mx-auto rounded-lg w-44 h-44" :src="team.profile" alt="" />
              <p class="mt-8 text-lg font-semibold leading-tight text-black group-hover:text-red-500">
                {{ team.firstname + ' ' + team.lastname }}
              </p>
              <p class="mt-1 text-base leading-tight text-gray-600">
                {{ team.position }}
              </p>
            </div>

          

          <div class="hidden lg:block"></div>


        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
const store = useTeamsStore()
const mainStore = useMainStore()

const teams = computed(() => { return store.teams })
const loading = computed(() => store.loading)
onMounted(() => {
  store.getTeams()
})
</script>

<style>

</style>