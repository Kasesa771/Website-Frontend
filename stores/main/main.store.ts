import { defineStore } from 'pinia'

export const useMainStore = defineStore("mainStore", () =>{
  const addModal = ref(false);
  const deleteModal = ref(false);
  const updateModal = ref(false);
  const viewModal = ref(false);
  const setDeleteModal = (value: boolean) => (deleteModal.value = value);
  const setUpdateModal = (value: boolean) => (updateModal.value = value);
  const setViewModal = (value: boolean) => (viewModal.value = value);
  const setAddModal = (value: boolean) => (addModal.value = value);


  return {
    addModal,
    setAddModal,
    deleteModal,
    setDeleteModal,
    updateModal,
    setUpdateModal,
    viewModal,
    setViewModal
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
