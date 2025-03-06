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
          <UForm :schema="schema" :state="state" class="space-y-4" enctype="multipart/form-data" @submit="onSubmit">
            <div>
              <UInput type="file" size="sm" icon="i-heroicons-folder" @input="handleFileUpload" accept="image/*" />
              <UProgress v-if="uploadProgress > 0" :value="uploadProgress" indicator />
              <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="flex h-52 w-52 rounded-lg mt-2" />
            </div>
            <UFormGroup label="Name" name="name">
              <UInput v-model="state.name" />
            </UFormGroup>
            <UFormGroup label="Price" name="price">
              <UInput v-model="state.price" />
            </UFormGroup>

            <UFormGroup label="Description" name="description">
              <UTextarea v-model="state.description" />
            </UFormGroup>

            <div class="flex gap-4 ">
              <UButton size="lg" @click="mainStore.setAddModal(false)" variant="outline">
                Close
              </UButton>
              <UButton size="lg" :loading="loading" :disabled="loading" type="submit">
                Save Product
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
              Delete Product
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="mainStore.setDeleteModal(false)" />
          </div>
        </template>
        <div>
          <div class="text-lg flex text-center pb-4">
            Are you sure you want to delete this {{ product.name }}
          </div>
          <div class="flex gap-4 justify-end ">
            <UButton size="lg" @click="mainStore.setDeleteModal(false)" variant="outline">
              Close
            </UButton>
            <UButton size="lg" :loading="loading" :disabled="loading" @click="onDeleteProduct(product.id)">
              Delete Product
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
              Update Product
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="mainStore.setUpdateModal(false)" />
          </div>
        </template>

        <div class="space-y-4">
          <div>
            <UInput type="file" size="sm" icon="i-heroicons-folder" @input="handleFileUpload" accept="image/*" />
            <UProgress v-if="uploadProgress > 0" :value="uploadProgress" indicator />
             
            <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="flex h-52 w-52 rounded-lg mt-2" />
            <img v-else :src="product.imageUrl" alt="Uploaded Image" class="flex h-52 w-52 rounded-lg mt-2" />

          </div>
          <UFormGroup label="Name" name="name">
            <UInput v-model="product.name" />
          </UFormGroup>
          <UFormGroup label="Price" name="price">
            <UInput v-model="product.price" />
          </UFormGroup>

          <UFormGroup label="Description" name="description">
            <UTextarea v-model="product.description" />
          </UFormGroup>

          <div class="flex gap-4 ">
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
const productStore = useProductsStore()
const loading = computed(() => {
  return productStore.loading
})

const product = computed(() => {
  return productStore.selectedProduct
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
import { number, object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useFirebaseUpload } from '~/composables/useFirebaseUpload';

const { uploadImage, imageUrl, uploadProgress } = useFirebaseUpload();
const schema = object({
  name: string().required('Product name is required'),
  description: string().required('Product description is required'),
  price: number().typeError('Price must be a number').required('Product price is required'),
})
const MAX_IMAGE_SIZE = 500 * 1024; // 500 KB in bytes

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  description: undefined,
  price: undefined,
  imageUrl: imageUrl
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  productStore.addProduct(event.data)
}

const fileUplaod = ref()
const handleFileUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    await uploadImage(file);
  }
};

const onUpdateProduct = () => {
  if (product.value) {
    // Extract plain values to avoid circular references
    const updatedProduct = {
      id: product.value.id,
      name: product.value.name,
      description: product.value.description,
      price: product.value.price,
      imageUrl: imageUrl.value != null ? imageUrl.value : product.value.imageUrl
    };

    productStore.updateProduct(updatedProduct)
  }
};

const onDeleteProduct = (productId: any) => {
  productStore.deleteProduct(productId);
}

</script>

<style scoped>
.image-preview img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>