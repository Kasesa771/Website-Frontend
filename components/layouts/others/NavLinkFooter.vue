<template>
  <a class="py-1 text-muted text-sm font-medium hover:text-black duration-300" :href="url"> {{ name }} </a>
</template>
<script setup lang="ts">

const props = defineProps({
  name: String,
  url: String,
});

</script>