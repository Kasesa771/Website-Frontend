<template>
  <div class="  flex flex-col justify-center items-center">
    <Header :item="mainHead[0]" />
    <div id="contact">

      <!-- About OUR COMPANY -->
      <section class=" w-full my-8 bg-slate-100 rounded-2xl">
        <div
          class="relative max-w-screen-2xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden reverse items-center">



          <div class="col-span-12 space-y-4 rounded-2xl bg-white lg:col-span-4    ">
            <div class="max-w-full p-4  lg:mb-0">
              <span class="block mb-4 text-base text-red-500 font-semibold">
                Contact Us
              </span>
              <h2 class="
          text-dark
         
          uppercase
          font-bold
          text-[32px]
              
          ">
                GET IN TOUCH WITH US
              </h2>


            </div>
            <div class="bg-white/10 relative rounded-lg p-8 sm:p-12  ">
              <form id="contactForm" @submit.prevent="submitForm">
                <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {{ error }}
                </div>
                <div v-if="isSuccess" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message sent successfully!
                </div>
                <div class="mb-6 mt-3">
                  <input type="text" v-model="formData.name" placeholder="Your Name" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <input type="email" v-model="formData.email" placeholder="Your Email" class="
                w-full
                rounded
                py-3
                px-[14px]
                 bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <input type="text" v-model="formData.subject" placeholder="Your Subject" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                " />
                </div>
                <div class="mb-6">
                  <textarea rows="3" v-model="formData.message" placeholder="Your Message" class="
                w-full
                rounded
                py-3
                px-[14px]
                bg-white/10 text-base
                border border-slate-300
                resize-none
                outline-none
                focus-visible:shadow-none
                focus:border-red-500
                "></textarea>
                </div>
                <div>
                  <button type="submit" :disabled="isLoading"
                    class="flex items-center justify-center text-center w-full gap-2 dark:border border-red-500  hover:text-red-500 text-white hover:bg-white dark:hover:bg-transparent  duration-200 ease-out  rounded-lg px-6 py-3 bg-red-500 ">
                    {{ isLoading ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
              </form>
              <div>
 
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8   space-y-6 px-4 sm:px-6 mt-20">

            <div class="relative  grid grid-cols-12 gap-x-6 gap-y-6 overflow-hidden items-center">

              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-10 w-10   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-10 w-10 transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/emails.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Email </span>
                  <p class="text-red-500 text-md group-hover:text-red-700">kasese2060@gmail.com</p>
                </div>
              </div>
              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-12 w-12   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-12 w-12  transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/phones.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Phone</span>
                  <p class="text-red-500 text-md group-hover:text-red-700">0788483857/ 0788304204</p>
                </div>
              </div>
              <div
                class="flex group bg-white rounded-xl h-24 col-span-12 lg:col-span-4   w-full items-center cursor-pointer">
                <div
                  class="relative  flex  flex-col duration-500  items-center text-center cursor-pointer  justify-center mx-2 h-11 w-11   bg-transparent overflow-hidden rounded  transition duration ease-out group">
                  <img class="h-11 w-11 transition duration-500 ease-in-out transform  m-2   rounded-lg  object-cover "
                    src="/assets/images/locations.png" />
                </div>
                <div class="flex-col duration-500 group-hover:translate-x-2">

                  <span class="text-xs text-muted font-light ">Address</span>
                  <p class="text-red-500 text-md group-hover:text-red-700">Gahanga Industrial Area, Kigali-Kicukiro
                    HOUSE
                  </p>
                </div>
              </div>

            </div>
            <div class=" rounded  h-[600px] w-full ">
              <!-- A rectangular picture -->
              <GoogleMap api-key="AIzaSyDHq7ERLIFZX2Mi79e0P_SIi5SL4ujwsw8" :scrollwheel="controls" :zoomControl="false"
                :fullscreenControl="controls" :mapTypeControl="controls" :streetViewControl="controls"
                style="width: 100%; height: 400px; " :center="center" :zoom="18" class="rounded-lg">

                <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">

                  <div tabindex="0" aria-label="tooltip 3" role="link"
                    class="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative"
                    onmouseover="showTooltip(3)" onfocus="showTooltip(3)" onmouseout="hideTooltip(3)">
                    <div class=" cursor-pointer">
                      <img src="/assets/images/kasesa-pin.png" style="height: 50px; width: 50;" />
                    </div>
                    <div
                      class="z-20 -mt-24 w-64 absolute transition duration-150 ease-in-out left-4 ml-8 shadow-lg bg-gray-800 p-4 rounded">
                      <svg class="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px"
                        viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#2D3748">
                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                              <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                <polygon id="Triangle"
                                  transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                                  points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="text-sm font-bold text-white pb-1">Kasesa Distillers & Distributors Ltd</p>
                      <p class="text-xs leading-4 text-white pb-3">We are dedicated to producing Liquors of the highest
                        quality, using only the finest ingredients and adhering to rigorous production standards.</p>
                      <p class="text-xs leading-4 text-white pb-1">Reach us here </p>

                    </div>
                  </div>


                </CustomMarker>


              </GoogleMap>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GoogleMap, CustomMarker, Polygon } from 'vue3-google-map'
const center = { lat: -2.036711, lng: 30.098709};
const { formData, error, isLoading, isSuccess, submitForm } = useContactForm()
const controls = ref(false)
const mainHead = [
  {
    title: "Contact Us",
    path: "Home/Contants"
  }
];
const opennig = [
  {
    day: "Monday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Tuesday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Wednesday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Thursday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Friday",
    hour: "9:00 - 17:00"
  },
  {
    day: "Saturday",
    hour: "11:00 - 17:00"
  },
  {
    day: "Sunday",
    hour: "Closed"
  },
]
</script>

<style></style>