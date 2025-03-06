import { defineStore } from "pinia";
import { httpRequest } from "~/services";

export const useGalleryStore = defineStore("galleryStore", () => {
  const gallery = ref<any[]>([]);
  const loading = ref(false);
  const selectedPhoto = ref();
  const setGallery = (data: any) => (gallery.value = data);
  const setLoading = (value: boolean) => (loading.value = value);
  const setSelectedPhoto = (value: any) => (selectedPhoto.value = value);
  const alert = useAlertStore();
  const mainStore = useMainStore();

  const addImageGallery = async (files: any) => {
    setLoading(true);

    await httpRequest
      .post("/gallery/bulks", files)
      .then((res) => {
        setGallery(res.data);
        alert.success(res.message);
        mainStore.setAddModal(false);
        getGallery();
      })
      .catch((error) => { })
      .finally(() => {
        setLoading(false);
      });
  };
  const getGallery = async () => {
    setLoading(true);
    await httpRequest
      .get("/gallery/all")
      .then((res) => {
        setGallery(res.data);
      })
      .catch((error) => { })
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteGallery = async (id: number) => {
    setLoading(true);
    await httpRequest
      .delete(`/gallery/delete/${id}`)
      .then((res) => {
        getGallery();
      })
      .catch((error) => { })
      .finally(() => {
        setLoading(false);
      });
  };
  const updateGallery = async (id: number, data: any) => {
    setLoading(true);
    await httpRequest
      .put(`/gallery/update/${id}`, data)
      .then((res) => {
        getGallery();
      })
      .catch((error) => { })
      .finally(() => {
        setLoading(false);
      });
  };

  return { gallery, loading, addImageGallery, getGallery, deleteGallery, selectedPhoto, setSelectedPhoto, updateGallery };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGalleryStore, import.meta.hot));
}
