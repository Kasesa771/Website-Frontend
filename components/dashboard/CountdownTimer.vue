<template>
  <div class="flex space-x-4 text-center">
    <div>
      <span class="text-4xl font-bold">{{ days }}</span>
      <p class="text-sm">DAYS</p>
    </div>
    <span class="text-4xl font-bold text-[#f40035]">:</span>
    <div>
      <span class="text-4xl font-bold">{{ hours }}</span>
      <p class="text-sm">HOURS</p>
    </div>
    <span class="text-4xl font-bold text-[#f40035]">:</span>
    <div>
      <span class="text-4xl font-bold">{{ minutes }}</span>
      <p class="text-sm">MINUTES</p>
    </div>
    <span class="text-4xl font-bold text-[#f40035]">:</span>
    <div>
      <span class="text-4xl font-bold">{{ seconds }}</span>
      <p class="text-sm">SECONDS</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const targetDate = ref<Date>(new Date());
targetDate.value.setDate(targetDate.value.getDate() + 30); // Set target date to 30 days from now

const days = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);

let countdownInterval: NodeJS.Timer;

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate.value.getTime() - now;

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

onMounted(() => {
  calculateTimeLeft();
  countdownInterval = setInterval(calculateTimeLeft, 1000);
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
});
</script>

<style scoped>
/* Optional: Add any custom styling here */
</style>
