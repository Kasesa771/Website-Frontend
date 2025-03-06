<template>
    <div class=" w-full">

        <div class="flex mb-6 items-center justify-between ">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Blogs
                </h1>
                <p class="text-gray-500 dark:text-gray-400">List of All blogs.</p>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <UInput v-model="search" icon="i-heroicons-magnifying-glass-20-solid" size="lg" placeholder="Search...">

                </UInput>
                <div class="flex items-center">
                    <UButton label="Add Blog" size="lg" color="primary" @click="mainStore.setAddModal(true)"
                        icon="i-heroicons-plus-circle-20-solid" />
                </div>

            </div>

        </div>

        <DashboardBlogModals />

        <UCard>
            <UTable v-model="selected" :rows="filteredItems" :columns="columns" :loading="loading"
                :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
                :progress="{ color: 'primary', animation: 'carousel' }">

                <template #name-data="{ row }">
                    <span
                        :class="[selected.find((product: any) => product.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{
                        row.name }}</span>
                </template>

                <template #image-data="{ row }">
                    <div class="border rounded-lg h-14 w-14 flex items-center justify-center">
                        <img :src="row.image" alt="Team Image" class="w-12 h-12 object-cover rounded-lg" />
                    </div>
                </template>

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>


            </UTable>

            <template #footer>
                <div class="lg:px-2 my-2">
                    <div class="flex flex-wrap justify-between items-center">
                        <div class="text-gray-400">
                            <span class="text-sm leading-5">
                                Showing
                                <span class="font-medium">{{ pageFrom }}</span>
                                to
                                <span class="font-medium">{{ pageTo }}</span>
                                of
                                <span class="font-medium">{{ teams.length }}</span>
                                results
                            </span>
                        </div>

                        <UPagination v-model="page" :page-count="pageCount" :total="teams.length" :ui="{
                            wrapper: 'flex items-center gap-1',
                            rounded: '!rounded-full min-w-[32px] justify-center',
                            default: {
                                activeButton: {
                                    variant: 'outline',
                                },
                            },
                        }" />
                    </div>
                </div>
            </template>
        </UCard>


    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "admin",
    title: "Dashboard",
    middleware: "auth",
});
const search = ref('')
const isOpen = ref(false)
const store = useBlogsStore()
const mainStore = useMainStore()

const teams = computed(() => { return store.blogs })
const loading = computed(() => store.loading)
onMounted(() => {
    store.getBlogs()
})
const columns = [
    { key: 'image', label: 'Image' },
    { key: 'title', label: 'Title' },
    { key: 'subtitle', label: 'Subtitle' },
    { key: 'description', label: 'Description' },
    { key: 'createdBy', label: 'CreatedBy' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
]

const viewTeam = (item: any) => {
    mainStore.setViewModal(true)
    store.setSelectedBlog(item)
}

const deleteTeam = (item: any) => {
    mainStore.setDeleteModal(true)
    store.setSelectedBlog(item)
}

const updateTeam = (item: any) => {
    mainStore.setUpdateModal(true)
    store.setSelectedBlog(item)
}

const items = (row: any) => [
    [{
        label: 'Edit Blog',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => updateTeam(row)
    }, {
        label: 'Delete Blog',
        icon: 'i-heroicons-trash-20-solid',
        click: () => deleteTeam(row)
    }]
]

const selected = ref([teams])
const page = ref(1);
const pageCount = ref(6);
const pageTotal = ref(20); // This value should be dynamic coming from the API
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() =>
    Math.min(page.value * pageCount.value, pageTotal.value)
);

const filteredItems = computed(() => {
    const rows = teams.value?.slice(
        (page.value - 1) * pageCount.value,
        page.value * pageCount.value
    );
    if (!search.value) {
        return rows.slice().sort((a: any, b: any) => b.id - a.id);
    }

    return rows.slice().sort((a: any, b: any) => b.id - a.id).filter((team) => {
        return Object.values(team).some((value) => {
            return String(value)
                .toLowerCase()
                .includes(search.value.toLowerCase());
        });
    });
});
</script>

<style></style>