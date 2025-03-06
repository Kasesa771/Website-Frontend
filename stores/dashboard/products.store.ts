import { defineStore } from 'pinia'
import { httpRequest } from "~/services";
import type { ProductData } from '~/types';

export const useProductsStore = defineStore("productsStore",  () => {
   const loading = ref(false);
   const products = ref<ProductData[]>([]);
   const selectedProduct = ref<ProductData>();
   const alert = useAlertStore();
   const mainStore = useMainStore();
   const setProducts = (data: any) => (products.value = data);
   const setLoading = (value: boolean) => (loading.value = value);
   const setSelectedProduct = (value: any) => (selectedProduct.value = value);

   const getProducts = async () => {
    setLoading(true);
    await httpRequest
      .get("/products/all")
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const addProduct = async (data: any) => {
    setLoading(true);
    await httpRequest
      .post("/products/add", data)
      .then((res) => {
        alert.success(res.message);
        mainStore.setAddModal(false)
        getProducts();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }

  const updateProduct = async (data: any) => {
    setLoading(true);

    console.log(data);
    await httpRequest
      .put(`/products/update/${data.id}`, data)
      .then((res) => {
        alert.success(res.message);
        mainStore.setUpdateModal(false);
        getProducts();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
    }

    const deleteProduct = async (id: number) => {

      setLoading(true);
      await httpRequest
        .delete(`/products/delete/${id}`)
        .then((res) => {
          alert.success(res.message);
          mainStore.setDeleteModal(false);
          getProducts();
        })
        .catch((error) => {})
        .finally(() => {
          setLoading(false);
        });
    }
    const getOneProduct = async (id: number) => {
      setLoading(true);
      await httpRequest
        .get(`/products/product/${id}`)
        .then((res) => {
          setSelectedProduct(res.data);
        })
        .catch((error) => {})
        .finally(() => {
          setLoading(false);
        });
    }


  return {
    loading,
    products,
    getProducts,
    setProducts,
    setLoading,
    addProduct,
    updateProduct,
    deleteProduct,
    getOneProduct,
    selectedProduct,
    setSelectedProduct,
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
