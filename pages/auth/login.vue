<template>
  <UContainer class="flex  justify-between mx-0 items-center h-lvh max-w-8xl">

    <UContainer class="grid content-center bg-white items-center h-lvh lg:w-1/3 w-full">
      <div class="flex flex-col items-center justify-start">
        <nuxt-link to="/" class="flex lg:ml-8 items-center">
          <img src="assets/images/kasesa-logo-01.png" class="h-14 lg:my-4" />
          <div class="font-extrabold text-2xl hidden text-primary-600">
            Kasesa
          </div>
        </nuxt-link>
        <div class="lg:mx-8 my-4">
          <div class="text-2xl font-medium text-center text-primary py-0">Admin Login</div>
          <div class="text-sm font-light py-2">
            Welcome Back!, Sign in to your account to continue
          </div>
        </div>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-4 lg:mx-12 my-6"
        @submit="loginAccount(state.email, state.password)">

        <UFormGroup size="lg" v-slot="{ error }" label="Email" name="email" :ui="{ error: 'text-xs' }">
          <UInput v-model="state.email" @input="validateEmail" :trailing-icon="error
            ? 'i-heroicons-exclamation-triangle-20-solid'
            : 'i-heroicons-heck-16-solid'
            " />
        </UFormGroup>
        <UFormGroup size="lg" v-slot="{ error }" label="Password" name="password" :ui="{ error: 'text-xs' }">
          <UInput v-model="state.password" :type="!show ? 'password' : 'text'" placeholder="Enter your password"
            :ui="{ icon: { trailing: { pointer: '' } } }">
            <template #trailing>Button
              <UButton v-show="state.password !== ''" color="gray" variant="link"
                :icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : (!show ? 'i-heroicons-eye' : 'i-heroicons-eye-slash')"
                :padded="false" @click="show = !show" />
            </template>
          </UInput>
        </UFormGroup>

        <div class="flex justify-between">
          <UCheckbox color="primary" label="Remember me" class="text-xm font-light" :model-value="true" />
          <NuxtLink :to="`/auth/reset-password?email=${state.email}`"
            class="text-primary dark:text-primary-500 font-medium text-sm hover:text-primary-700 dark:hover:text-gray-200">
            Forgot password?
          </NuxtLink>
        </div>

        <UButton :disabled="!isEmailValid && isLoading" :loading="loadingItem == 1" size="lg" type="submit"
          color="primary" variant="solid" :label="loadingItem == 1 ? 'Processing...' : 'Login'" :trailing="false"
          block />
        <UButton color="primary" to="/" variant="link">Back To Homepage</UButton>

      </UForm>


    </UContainer>
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { reactive } from "vue";
import type { _padding } from "#tailwind-config/theme";

definePageMeta({
  layout: "auth",
  title: "Account Login",
  middleware: "authenticated",
});
const route = useRoute()
const authStore = useAuthStore();
const showAlertError = ref(false);
const loadingItem = ref(0) //1: internal,2: google, 3: github
const isLoading = ref(false);
const isEmailValid = ref(false);

 
const schema = object({
  email: string().email("Invalid email").required("Username/Email required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Password required"),
});
type Schema = InferType<typeof schema>;
const show = ref(false);
const state = reactive({
  email: "",
  password: "",
});

function validateEmail(events: any) {
  isEmailValid.value = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(events)
  console.log(isEmailValid.value)
  console.log(events)
}



const loginAccount = async (username: any, password: any) => {
  isLoading.value = true;
  loadingItem.value = 1
  // setTimeout(() => ((isLoading.value = false), (loadingItem.value = 0)), 7000);
  if (state.password == null) {
    showAlertError.value = true;
  } else {
    await authStore.login({ username: username, password: password });
  }
  loadingItem.value = 0
  isLoading.value = false;
};





</script>

<style></style>
