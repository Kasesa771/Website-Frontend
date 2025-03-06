import { defineStore } from "pinia";
import { httpRequest } from "~/services";
import type { BlogData } from "~/types";

export const useBlogsStore = defineStore("blogsStore", () => {
    const loading = ref(false);
    const blogs = ref<BlogData[]>([]);
    const selectedBlog = ref<BlogData>();
    const alert = useAlertStore();
    const mainStore = useMainStore();
    const setBlogs = (data: any) => (blogs.value = data);
    const setLoading = (value: boolean) => (loading.value = value);
    const setSelectedBlog = (value: any) => (selectedBlog.value = value);

    const getBlogs = async () => {
        setLoading(true);
        await httpRequest
            .get("/blogs/all")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const addBlog = async (data: any) => {
        setLoading(true);
        await httpRequest
            .post("/blogs/create", data)
            .then((res) => {
                alert.success(res.message);
                mainStore.setAddModal(false);
                getBlogs();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const updateBlog = async (data: any) => {
        setLoading(true);

        console.log(data);
        await httpRequest
            .put(`/blogs/update/${data.id}`, data)
            .then((res) => {
                alert.success(res.message);
                mainStore.setUpdateModal(false);
                getBlogs();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const deleteBlog = async (id: number) => {
        setLoading(true);
        await httpRequest
            .delete(`/blogs/delete/${id}`)
            .then((res) => {
                alert.success(res.message);
                mainStore.setDeleteModal(false);
                getBlogs();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };
    const getOneBlog = async (id: number) => {
        setLoading(true);
        await httpRequest
            .get(`/blogs/member/${id}`)
            .then((res) => {
                setSelectedBlog(res.data);
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading,
        blogs,
        getBlogs,
        setBlogs,
        setLoading,
        addBlog,
        updateBlog,
        deleteBlog,
        getOneBlog,
        selectedBlog,
        setSelectedBlog,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useBlogsStore, import.meta.hot));
}
