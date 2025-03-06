<template>
    <div>
        <UModal v-model="addModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Add New Member
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setAddModal(false)" />
                    </div>
                </template>

                <div>
                    <UForm :schema="schema" :state="state" class="space-y-1" enctype="multipart/form-data"
                        @submit="onSubmit">
                        <div>
                            <UFormGroup label="Member Profile" name="profile">
                                <UInput type="file" size="sm" icon="i-heroicons-folder" @input="handleFileUpload"
                                    accept="image/*" />
                            </UFormGroup>
                            <UProgress v-if="uploadProgress > 0" :value="uploadProgress" indicator />
                            <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image"
                                class="flex h-52 w-52 rounded-lg mt-2" />
                        </div>
                        <div class="  gap-4 ">
                            <UFormGroup label="Title" class="w-full" name="title">
                                <UInput v-model="state.title" />
                            </UFormGroup>
                            <UFormGroup class="w-full" label="Subtile" name="subtitle">
                                <USelectMenu v-model="state.subtitle" value-attribute="name" option-attribute="name"
                                    :options="positionItems" />
                            </UFormGroup>
                        </div>
                        <div class="flex gap-4 ">
                            <UFormGroup label="Phone" class="w-full" name="description">
                                <UTextarea v-model="state.description" />
                            </UFormGroup>

                        </div>

                        <div class="flex justify-end gap-4 pt-4">
                            <UButton size="lg" @click="mainStore.setAddModal(false)" variant="outline">
                                Close
                            </UButton>
                            <UButton size="lg" :loading="loading" :disabled="loading" type="submit">
                                Save Member
                            </UButton>

                        </div>

                    </UForm>
                </div>

            </UCard>
        </UModal>
        <UModal v-if="deleteModal" v-model="deleteModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-primary dark:text-primary">
                            Delete Event & News
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setDeleteModal(false)" />
                    </div>
                </template>
                <div>
                    <div class="text-lg flex text-center pb-4">
                        Are you sure you want to delete this {{ team?.title }}
                    </div>
                    <div class="flex gap-4 justify-end ">
                        <UButton size="lg" @click="mainStore.setDeleteModal(false)" variant="outline">
                            Close
                        </UButton>
                        <UButton size="lg" :loading="loading" :disabled="loading" @click="onDeleteProduct(team?.id)">
                            Delete Event & News
                        </UButton>

                    </div>
                </div>
            </UCard>
        </UModal>

        <UModal v-if="updateModal" v-model="updateModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Update Event & News
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setUpdateModal(false)" />
                    </div>
                </template>

                <div class="space-y-4">
                    <div>
                        <UInput type="file" size="sm" icon="i-heroicons-folder" @input="handleFileUpload"
                            accept="image/*" />
                        <UProgress v-if="uploadProgress > 0" :value="uploadProgress" indicator />
                        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image"
                            class="flex h-52 w-52 rounded-lg mt-2" />
                        <img v-else :src="team.image" alt="Uploaded Image" class="flex h-52 w-52 rounded-lg mt-2" />
                    </div>
                    <div class="  gap-4 ">
                        <UFormGroup label="Title" class="w-full" name="title">
                            <UInput v-model="team.title" />
                        </UFormGroup>
                        <UFormGroup class="w-full" label="Subtile" name="subtitle">
                            <USelectMenu v-model="team.subtitle" value-attribute="name" option-attribute="name"
                                :options="positionItems" />
                        </UFormGroup>
                    </div>
                    <div class="flex gap-4 ">
                        <UFormGroup label="Description" class="w-full" name="description">
                            <UTextarea v-model="team.description" />
                        </UFormGroup>

                    </div>

                    <div class="flex gap-4  ">
                        <UButton size="lg" @click="mainStore.setUpdateModal(false)" variant="outline">
                            Close
                        </UButton>
                        <UButton size="lg" @click="onUpdateProduct()" :loading="loading" :disabled="loading">
                            Save Changes
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
                            Member Details
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
const authStore = useAuthStore();
const store = useBlogsStore()
const loading = computed(() => {
    return store.loading
})
 
const positionItems = [{
    id: 1,
    name: 'Marketing'
}, {
    id: 2,
    name: 'Events'
}]

 const user = computed(() => {
    return authStore.user
})

const team = computed(() => {
    return store.selectedBlog
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

// ADD PRODUCT
import { mixed, number, object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useFirebaseUpload } from '~/composables/useFirebaseUpload';
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

const { uploadImage, imageUrl, uploadProgress } = useFirebaseUpload();
const schema = object({
    title: string().required('Title name is required'),
    subtitle: string().required('Subtitle is required'),
    description: string().required('Description is required'),
    


})

type Schema = InferType<typeof schema>

const state = reactive({
    title: undefined,
    subtitle: undefined,
    description: undefined,
    createdBy: user.value.firstName + " " + user.value.lastName,
    status: "Published",
    image: imageUrl
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    store.addBlog(event.data)
}

const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        await uploadImage(file);

    }

};

const onUpdateProduct = () => {

    if (team.value) {
        // Extract plain values to avoid circular references
        const updatedTeam = {
            id: team.value.id,
            image: imageUrl.value != null ? imageUrl.value : team.value.image, // Assuming `imageUrl` is a ref with the URL as a string
            title: team.value.title,
            subtitle: team.value.subtitle,
            description: team.value.description,
            createdBy: team.value.createdBy,
            status: team.value.status // Assuming `imageUrl` is a ref with the URL as a string
        };

        store.updateBlog(updatedTeam); // Pass a plain object
    }
}

const onDeleteProduct = (productId: any) => {
    store.deleteBlog(productId);
}

</script>

<style scoped>
.image-preview img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
}
</style>