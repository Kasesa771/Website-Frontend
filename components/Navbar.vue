<template>
    <nav
        :class="['fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg z-10 transition-shadow duration-300', { 'shadow-lg': hasShadow }]">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a class="text-2xl font-bold text-white" href="#">Brand</a>
            <div class="hidden md:flex space-x-4">
                <a href="#" class="text-white hover:underline">Home</a>
                <a href="#" class="text-white hover:underline">About</a>
                <a href="#" class="text-white hover:underline">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: 'Navbar',
    setup() {
        const hasShadow = ref<boolean>(false); // Declare reactive variable with type

        const handleScroll = (): void => {
            hasShadow.value = window.scrollY > 0; // Update shadow state based on scroll position
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll); // Add event listener on mount
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll); // Remove event listener on unmount
        });

        return { hasShadow }; // Return reactive variable to the template
    },
});
</script>

<style scoped>
/* Add shadow for the navbar */
.shadow-lg {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
