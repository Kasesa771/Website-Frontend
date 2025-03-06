<template>
    <div>
        <UModal v-model="addModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Add New Product
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setAddModal(false)" />
                    </div>
                </template>

                <div>
                    <form @submit.prevent="handleUpload" class="flex flex-col gap-4">

                        <UInput type="file" size="sm" icon="i-heroicons-folder" multiple @input="handleFileSelection"
                            accept="image/*" />
                         
                        <div class="flex gap-x-4" v-if="imagePreviews.length">
                            <div v-for="(preview, index) in imagePreviews" :key="index"
                                class="h-24 w-24 rounded-lg border border-gray-300 p-1">
                                <img :src="preview" alt="Image Preview"
                                    class="object-cover flex h-full w-full rounded-lg" />
                            </div>
                        </div>
                        <div class="flex gap-4 justify-end ">
                            <UButton size="lg" @click="mainStore.setAddModal(false)" variant="outline">
                                Close
                            </UButton>
                            <UButton v-if="uploadedUrls.length == 0" size="lg" type="submit">
                                Upload {{ selectedFiles.length }} Photo
                            </UButton>
                            <UButton v-else size="lg" :loading="loading"  @click="saveToGallery()"  :disabled="loading">
                                Save {{ selectedFiles.length }} to Gallery
                            </UButton>

                        </div>
                    </form>


                </div>

            </UCard>
        </UModal>
        <UModal v-if="deleteModal" v-model="deleteModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-primary dark:text-primary">
                            Delete Product
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setDeleteModal(false)" />
                    </div>
                </template>
                <div>
                    <div class="text-lg flex text-center pb-4">
                        Are you sure you want to delete this
                    </div>
                    <div class="flex gap-4 justify-end ">
                        <UButton size="lg" @click="mainStore.setDeleteModal(false)" variant="outline">
                            Close
                        </UButton>
                        <UButton size="lg" :loading="loading" :disabled="loading">
                            Delete Product
                        </UButton>

                    </div>
                </div>
            </UCard>
        </UModal>



        <UModal v-if="viewModal" v-model="viewModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Product Details
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setViewModal(false)" />
                    </div>
                </template>

                <Placeholder class="h-32" />
            </UCard>
        </UModal>
    </div>
</template>

<script lang="ts" setup>

const search = ref('')
const mainStore = useMainStore();
const galleryStore = useGalleryStore()
const loading = computed(() => {
    return galleryStore.loading
})

 
const addModal = computed(() => {
    return mainStore.addModal;
})
const updateModal = computed(() => {
    return mainStore.updateModal;
})
const deleteModal = computed(() => {
    return mainStore.deleteModal;
})
const viewModal = computed(() => {
    return mainStore.viewModal;
})

import { useFirebaseUpload } from '~/composables/useFirebaseUpload';

const { uploadMultipleImages } = useFirebaseUpload();
const selectedFiles = ref([]);
const uploadedUrls = ref([]);
const imagePreviews = ref([]);  // To hold the data URLs for image previews

const handleFileSelection = (event: any) => {
    selectedFiles.value = Array.from(event.target.files); // Capture selected files
    // Generate image previews for selected files
    imagePreviews.value = selectedFiles.value.map(file => URL.createObjectURL(file));
    
};

const handleUpload = async () => {
    if (selectedFiles.value.length) {
        // Upload images to Firebase and get the URLs
        const uploaded = await uploadMultipleImages(selectedFiles.value);

        if (uploaded && uploaded.length > 0) {
            // Map the uploaded image URLs to an array with imageUrl and name
            uploadedUrls.value = uploaded.map((url, index) => ({
                imageUrl: url,      // URL returned from Firebase upload
                name: "Kasesa Image", // Original file name
            }));

            console.log(uploadedUrls.value);
            
        }
    }
};

const saveToGallery = async () => {
    if (selectedFiles.value.length) {
        if (uploadedUrls.value.length > 0) {
            galleryStore.addImageGallery(uploadedUrls.value);
        }
    }
};

</script>

<style scoped>
.image-preview img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
}
</style>