import { ref } from 'vue'

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

interface UseContactForm {
    formData: ContactFormData
    error: string | null
    isLoading: boolean
    isSuccess: boolean
    submitForm: () => Promise<void>
    resetForm: () => void
}

export const useContactForm = (): UseContactForm => {
    const formData = ref<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const error = ref<string | null>(null)
    const isLoading = ref(false)
    const isSuccess = ref(false)

    const submitForm = async () => {
        error.value = null
        isLoading.value = true
        isSuccess.value = false

        try {
            const { data, error: apiError } = await useFetch('/api/contact', {
                method: 'POST',
                body: formData.value
            })

            if (apiError.value) {
                throw new Error(apiError.value.message)
            }

            isSuccess.value = true
            resetForm()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred while sending the message'
        } finally {
            isLoading.value = false
        }
    }

    const resetForm = () => {
        formData.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        error.value = null
        isSuccess.value = false
    }

    return {
        formData,
        error,
        isLoading,
        isSuccess,
        submitForm,
        resetForm
    }
}