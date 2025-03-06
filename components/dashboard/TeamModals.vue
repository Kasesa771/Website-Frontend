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
                        <div class="flex gap-4 ">
                            <UFormGroup label="First Name" class="w-full" name="firstname">
                                <UInput v-model="state.firstname" />
                            </UFormGroup>
                            <UFormGroup label="Last Name" class="w-full" name="lastname">
                                <UInput v-model="state.lastname" />
                            </UFormGroup>
                        </div>
                        <div class="flex gap-4 ">
                            <UFormGroup label="Phone" class="w-full" name="phone">
                                <UInput v-model="state.phone" />
                            </UFormGroup>
                            <UFormGroup label="Department" name="department" class="w-full">

                                <USelectMenu v-model="state.department" value-attribute="name" option-attribute="name"
                                    :options="departmentItems" />
                            </UFormGroup>

                        </div>
                        <div class="flex gap-4 ">

                            <UFormGroup label="Position" name="position" class="w-full">
                                <USelectMenu v-model="state.position" value-attribute="name" option-attribute="name"
                                    :options="positionItems" />

                            </UFormGroup>

                            <UFormGroup label="Status" name="status" class="w-full">
                                <USelectMenu v-model="state.status" value-attribute="name" option-attribute="name"
                                    :options="statusItems" />

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
                            Delete Member
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="mainStore.setDeleteModal(false)" />
                    </div>
                </template>
                <div>
                    <div class="text-lg flex text-center pb-4">
                        Are you sure you want to delete this {{ team?.firstname + " " + team?.lastname }}
                    </div>
                    <div class="flex gap-4 justify-end ">
                        <UButton size="lg" @click="mainStore.setDeleteModal(false)" variant="outline">
                            Close
                        </UButton>
                        <UButton size="lg" :loading="loading" :disabled="loading" @click="onDeleteProduct(team?.id)">
                            Delete Member
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
                            Update Member
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
                        <img v-else :src="team.profile" alt="Uploaded Image" class="flex h-52 w-52 rounded-lg mt-2" />
                    </div>
                    <div class="flex gap-4 ">
                        <UFormGroup label="First Name" class="w-full" name="firstname">
                            <UInput v-model="team.firstname" />
                        </UFormGroup>
                        <UFormGroup label="Last Name" class="w-full" name="lastname">
                            <UInput v-model="team.lastname" />
                        </UFormGroup>
                    </div>
                    <div class="flex gap-4 ">
                        <UFormGroup label="Phone" class="w-full" name="phone">
                            <UInput v-model="team.phone" />
                        </UFormGroup>
                        <UFormGroup label="Department" name="department" class="w-full">

                            <USelectMenu v-model="team.department" value-attribute="name" option-attribute="name"
                                :options="departmentItems" />
                        </UFormGroup>

                    </div>
                    <div class="flex gap-4 ">

                        <UFormGroup label="Position" name="position" class="w-full">
                            <USelectMenu v-model="team.position" value-attribute="name" option-attribute="name"
                                :options="positionItems" />

                        </UFormGroup>

                        <UFormGroup label="Status" name="status" class="w-full">
                            <USelectMenu v-model="team.status" value-attribute="name" option-attribute="name"
                                :options="statusItems" />

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
const store = useTeamsStore()
const loading = computed(() => {
    return store.loading
})
const departmentItems = [
    { id: 1, name: 'Sales and Marketing Depertment'},
    { id: 2, name: 'Finance department'},
    { id: 3, name: 'Operation department'},
    { id: 4, name: 'Production department'},
    { id: 5, name: 'Legal department'},
    { id: 6, name: 'Logistic department'},
    { id: 7, name: 'Warehouse Department'},
    { id: 8, name: 'Technical department'},
    { id: 9, name: 'Accounting Departement'},
    { id: 10, name: 'production & quality Department'},
    { id: 11, name: 'Cleaning Department'},
    { id: 12, name: 'Secretariat department'},
    { id: 13, name: 'Managing Director ' }, 
    { id: 14, name: 'Transport department'}
]
const positionItems = [
    { id: 1, name: 'Production officer' },
    { id: 2, name: 'Marketing officer' },
    { id: 3, name: 'Secretary' },
    { id: 4, name: 'Legal officer' },
    { id: 5, name: 'Stock manager' },
    { id: 6, name: 'Logistic officer' },
    { id: 7, name: 'Driver' },
    { id: 8, name: 'Plumber' },
    { id: 9, name: 'Sales manager' },
    { id: 10, name: 'Accountant' },
    { id: 11, name: 'Internal auditor' },
    { id: 12, name: 'Manager' },
    { id: 13, name: 'Production and Quality officer' },
    { id: 14, name: 'Sales and Marketing promoter' },
    { id: 15, name: 'Operator' },
    { id: 16, name: 'Operation manager' },
    { id: 17, name: 'Technician' },
    { id: 18, name: 'Supervisor' },
    { id: 19, name: 'Cleaner'}
]

const statusItems = [{
    id: 1,
    name: 'ACTIVE'
}, {
    id: 2,
    name: 'LOCKED'
}]

const team = computed(() => {
    return store.selectedTeam
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
    firstname: string().required('First name is required'),
    lastname: string().required('Last name is required'),
    phone: number().typeError('Phone number must be decimal').required('Phone number is required'),
    department: string().required('Department name is required'),
    position: string().required('Position is required'),
    status: string().required('Status is required'),


})

type Schema = InferType<typeof schema>

const state = reactive({
    firstname: undefined,
    lastname: undefined,
    phone: undefined,
    department: undefined,
    position: undefined,
    status: undefined,
    profile: imageUrl
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    store.addTeam(event.data)
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
            profile: imageUrl.value != null ? imageUrl.value : team.value.profile, // Assuming `imageUrl` is a ref with the URL as a string
            firstname: team.value.firstname,
            lastname: team.value.lastname,
            phone: team.value.phone,
            department: team.value.department,
            position: team.value.position,
            status: team.value.status // Assuming `imageUrl` is a ref with the URL as a string
        };

        store.updateTeam(updatedTeam); // Pass a plain object
    }
}

const onDeleteProduct = (productId: any) => {
    store.deleteTeam(productId);
}

</script>

<style scoped>
.image-preview img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
}
</style>